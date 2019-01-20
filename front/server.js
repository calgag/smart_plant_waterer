var express = require("express");
var path = require("path")
var app = express();

app.use("/public", express.static(__dirname + "/public"));


app.get("/", function(req, res){
	res.sendFile(__dirname + "/public/index.html");
});

app.listen(8080);
