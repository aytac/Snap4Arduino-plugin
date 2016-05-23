var Firmata = require('./firmata.js');
var Boards = [];

function Parser() {};

Parser.prototype.parseMessage = function(message, chromePort) {
    try {
        this[message.command].apply(this, (message.args || []).concat(chromePort));
    } catch (err) {
        console.error('invalid message!');
        console.error(message);
        console.error(err);
    }
};

Parser.prototype.getDevices = function (chromePort) {
    chrome.serial.getDevices(function (devices) {
        chromePort.postMessage({ command: 'gotDevices', args: devices });
    });
};

Parser.prototype.connectBoard = function (serialPort, chromePort) {
    try {
        var board = new Firmata.Board(serialPort, function() {
            chromePort.postMessage({ command: 'attemptedConnection', args: board });
        });
        Boards.push(board);
        console.log(board);
    } catch (err) {
        console.log(err);
        chromePort.postMessage({ command: 'attemptedConnection', args: [ null, err ] });
    }
}

chrome.runtime.onConnectExternal.addListener(function (chromePort) {
    var parser = new Parser();
    chromePort.onMessage.addListener(function (message) { parser.parseMessage(message, chromePort) });
});
