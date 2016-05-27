# Snap4Arduino-plugin
A web-based Snap4Arduino version that uses a browser plugin to communicate with the board.

## How to use it

### Preparing the repo
First of all, clone this repo:

```
git clone https://github.com/bromagosa/Snap4Arduino-plugin.git
```

Then, clone ``Snap4Arduino`` and move the contents of its ``snap`` folder into into this repo's ``snap`` folder:

```
cd Snap4Arduino-plugin
git clone https://github.com/edutec/Snap4Arduino.git
mv Snap4Arduino/snap/* snap/
```

### Installing the browser extension
Now you need to install the browser plugin. For now, only Chrome is supported. To do so:

* Go to ``chrome://extensions`` in your Chrome browser
* Drag and drop the ``Snap4Arduino.crx`` extension file into your browser window

### Running Snap4Arduino on the web
For now, you need to serve the ``snap`` folder at port ``8080`` from your local machine. There are several ways to do so, pick your favourite here: https://gist.github.com/willurd/5720255

Finally, visit ``http://localhost:8080/s4a-plugin.html``.

**Note**: Some stuff does not work yet and you may experience random disconnections. From time to time you'll need to reset the board right after starting a connection attempt for it tu succeed. Please be patient, this is work in progress.
