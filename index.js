// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   fs.readFile('demofile1.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);


const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 4000;                  //Save the port number where your server will be listening

//Idiomatic expression in express to route and respond to a client request
app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('home.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});


// const data = JSON.stringify({
//     "link": "https://www.youtube.com/watch?v=djV11Xbc914"
//   });
  
//   const xhr = new XMLHttpRequest();
//   xhr.withCredentials = true;
  
//   xhr.addEventListener("readystatechange", function () {
//     if (this.readyState === this.DONE) {
//       console.log(this.responseText);
//     }
//   });
  
//   xhr.open("POST", "http://10.82.20.64:5000/queue");
//   xhr.setRequestHeader("Content-Type", "application/json");
  
//   xhr.send(data);