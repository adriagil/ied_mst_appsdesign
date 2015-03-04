# Installation instructions
* Clone or download the repository
* Open the *schemas* folder and reproduce the circuit as shown on the image
* Connect the Arduino, open the IDE and upload the code that can be found on the folder *arduino/cube/cube.ino*
* Copy the serial port name for a later usage, for example: `/dev/tty.usbmodem/1411`
* Start the text editor (Atom or Sublime) and open the downloaded project folder / repository
* Locate the file `app.js` and open it. Replace the serial port configuration with the one you save it in the previous step
* Open a Terminal and use `cd` to navigate to the project folder: for example `cd /Users/adriagil/IED/ied_mst_appsdesign/01_iot_threejs-cube`
* Execute `npm install`
* Execute `bower install`
* If no errors present, execute `node app.js`
* Open a browser and navigate to [http://localhost:3000](http://localhost:3000)
* Play with it!

# Tools and packages used
* Arduino
* Node.js
  * node package Express
  * node package Serialport
  * node package Socket.io
  * bower package Socket.io
  * bower package components-threejs
  * bower package threex.videotexture

# Languages
* Arduino
* JavaScript
* HTML5
* CSS3
* WebGL
