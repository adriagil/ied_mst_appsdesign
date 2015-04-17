# Installation instructions
* Clone or download the repository
* Start the text editor (Atom or Sublime) and open the downloaded project folder / repository
* Open a Terminal and use `cd` to navigate to the project folder: for example `cd /Users/adriagil/IED/ied_mst_appsdesign/03_iot_browser-sensor`
* Execute `npm install`
* Execute `bower install`
* If no errors present, execute `node app.js`
* Open a browser and navigate to [http://localhost:3000](http://localhost:3000)
* Play with it!

# Additional information
* Inside the schemas folder you will find several images illustrating how axes and coordinates works in space using HTML5 browser device apis.
* To access via mobile phone make sure both devices (laptop and mobile) are connected to the same network and the node application (app.js) server is up and running. Then get your local IP address (use Terminal and type `ifconfig` or Cmd and type `ipconfig` ) and in your mobile browser enter the IP address and port, for example `192.168.2.137:3000`.

# Tools and packages used
* Node.js
  * node package Express
  * bower package jQuery

# Languages
* JavaScript
* HTML5
* CSS3

# Further readings and docuemntation
* [Article talking about DeviceOrientation and DeviceMotion apis](http://www.html5rocks.com/en/tutorials/device/orientation/)
* [DeviceOrientation documentation](http://w3c.github.io/deviceorientation/spec-source-orientation.html#deviceorientation)
* [DeviceMotion documentation](http://w3c.github.io/deviceorientation/spec-source-orientation.html#devicemotion)
