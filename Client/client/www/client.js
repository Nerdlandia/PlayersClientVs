/* a lightweight server for testing */
var port = 7776;
var express = require("express");
var client = express();

client.use(express.static(__dirname + "/index.html"));
/* CORS to allow cross domain references*/
client.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    next();
});

client.listen(port);
console.log('listening on localhost port#: ' + port); 