# Installation instructions
* Clone or download the repository
* Start the text editor (Atom or Sublime) and open the downloaded project folder / repository
* Open a Terminal and use `cd` to navigate to the project folder: for example `cd /Users/adriagil/IED/ied_mst_appsdesign/03_iot_browser-sensor`
* Execute `npm install express`
* If no errors present, execute `node http_server.js`
* Open a browser and navigate to [http://localhost:3000](http://localhost:3000)
* Play with it!

# Additional information
* As you can see the NodeJS server is the file `http_server.js` located in the root path of this project. This code file is commented in order to explain the basic steps to run and setup the server.
* All the files inside `/application` folder is the interface/frontend application that will be accesible by the users.
* To access via mobile phone make sure both devices (laptop and mobile) are connected to the same network and the node application (app.js) server is up and running. Then get your local IP address (use Terminal and type `ifconfig` or Cmd and type `ipconfig` ) and in your mobile browser enter the IP address and port, for example `192.168.2.137:3000`.

# Tools and packages used
* Node.js
  * node package Express

# Languages
* JavaScript
* HTML5
* CSS3

# Debugging
* In the browser (Google Chrome) and with the app open just do a right click and select `Inspect Element` or just use the keyboard shortcut 'alt+command+i' in OSX.
* A new pane will be open in the current window. The relevant tools to use are "Elements" and "Console" tabs.
* In "Elements" tab you can inspect HTML + CSS.
* In "Console" tab you can play with Javascript in realtime.
