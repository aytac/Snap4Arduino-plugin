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
* Enable ``developer mode`` (top right)
* Click on ``Load unpacked extension…`` and navigate to the ``chrome`` subfolder inside ``Snap4Arduino-plugin``

### Running Snap4Arduino on the web
For now, you need to serve the ``snap`` folder at port ``8080`` from your local machine. There are several ways to do so, pick your favourite here: https://gist.github.com/willurd/5720255

Finally, visit ``http://localhost:8080/s4a-plugin.html``.

**Note**: Most stuff does _NOT_ work yet. Please be patient, this is work in progress.
