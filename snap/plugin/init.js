var chromePort = chrome.runtime.connect('lbodcnodhfjbpaphkallgpbeagilbcfn'),
    firmata = {
        Board: function(port, callback) {
            var board; 
            window.addEventListener(
                    'attemptedConnection',
                    function (event) { 
                        if (event.detail) {
                            callback(event.detail.board, event.detail.error);
                        }
                    });
            chromePort.postMessage({ command: 'connectBoard', args: [ port ] });
        }
    },
    parser = {},
    require = function () {};

chromePort.onMessage.addListener(ParseMessage);

function ParseMessage (message) {
    // Chrome treats devs like naughty kids, so I can't call a function by its name here
    // Thanks to this, I need to use an awful antediluvian switch case statement and waste
    // my time writing all possible cases instead of delegating
    try {
        var args = message.args || [];
        switch (message.command) {
            case 'gotDevices':
                GotDevices(args);
                break;
            case 'attemptedConnection':
                AttemptedConnection(args);
                break;
        }
    } catch (err) {
        console.error('invalid message!');
        console.error(message);
        console.error(err);
    }
};

// You guessed it, Chrome wants named functions here
function GotDevices (devices) {
    var event = new CustomEvent('gotDevices', { detail: devices });
    window.dispatchEvent(event);
}

function AttemptedConnection (board, error) {
    var event = new CustomEvent('attemptedConnection', { detail: { board: board, error: error } });
    window.dispatchEvent(event);
}

chrome.serial = {};

chrome.serial.getDevices = function () {
    chromePort.postMessage({ command: 'getDevices' });
};
