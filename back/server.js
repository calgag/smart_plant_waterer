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

app.get("/on", function(req, res){
	gpio.set();
	setTimeout(function() {
		console.log("waiting...");
	}, 1000);
	gpio.set(0);
});

app.listen(8000);
