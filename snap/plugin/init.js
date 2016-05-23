var chromePort = chrome.runtime.connect('lbodcnodhfjbpaphkallgpbeagilbcfn'),
    firmata = {},
    parser = {},
    require = function () {};

chromePort.onMessage.addListener(ParseMessage);

function ParseMessage (message) {
    // Chrome treats devs like naughty kids, so I can't call a function by its name here
    // Thanks to this, I need to use an awful antediluvian switch case statement and waste
    // my time writing ALL POSSIBLE CASES instead of delegating
    try {
        var args = message.args || [];
        switch (message.command) {
            case 'gotDevices':
                GotDevices(args);
                break;
        }
    } catch (err) {
        console.error('invalid message!');
        console.error(message);
        console.error(err);
    }
};

function GotDevices (devices) {
    var event = new CustomEvent('gotDevices', { detail: devices });
    window.dispatchEvent(event);
}

chrome.serial = {};

chrome.serial.getDevices = function () {
    chromePort.postMessage({ command: 'getDevices' });
};


