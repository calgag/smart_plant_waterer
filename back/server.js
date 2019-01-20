var express = require("express");
var gpio = require("gpio");

var app = express();

var gpio2 = gpio.export(2, {
	direction: gpio.DIRECTION.OUT,
	interval: 200,
	ready: function(){
			console.log("Ready");
	}
});

app.get("/", function(req, res){
	res.send("Hello world");
});

app.listen(8000);
