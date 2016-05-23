WorldMorph.prototype.Arduino.firmata = firmata;

WorldMorph.prototype.Arduino.getSerialPorts = function (callback) {
    var myself = this,
        portList = [],
        portcheck = /usb|DevB|rfcomm|acm|^com/i; // Not sure about rfcomm! We must dig further how bluetooth works in Gnu/Linux

    chrome.serial.getDevices();

    window.addEventListener(
            'gotDevices',
            function (event) { 
                if (event.detail) { // contains all ports
                    event.detail.forEach(function (device) { 
                        if (!myself.isPortLocked(device.path) && portcheck.test(device.path)) {
                            portList[device.path] = device.path; 
                        }
                    });
                }
                callback(portList);
            });
};
