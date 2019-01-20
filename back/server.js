var express = require("express");
var path = require("path");
let {PythonShell} = require('python-shell');

// Valid GPIOs for config
var gpios = ["6", "13", "19", "26"];

var app = express();




// OPEN VALVE FUNC
app.get("/open/:id", function(req, res){
	console.log("Received request to open valve " + req.params.id + "...");
	var valid = false;
	// CHECK FOR VALID GPIO (server specified)
	if(parseInt(req.params.id) < 5 && parseInt(req.params.id) > 0){
		valid = true;
	}
	// IF VALID, RUN PY SCRIPT
	if(valid == true){
		var options = {
			scriptPath: __dirname + "/py_scripts/",
			pythonOptions: ['-u'],
			args: gpios[parseInt(req.params.id)-1]
		};
		PythonShell.run("openValve.py", options, function(err, results){
			if(err) throw err;
			console.log("Successfully opened valve " + req.params.id + "...");
			res.send("Successful");
		});
	}else{
		console.log("ERROR: Invalid GPIO port request.");
	}
});

// CLOSE VALVE FUNC
app.get("/close/:id", function(req, res){
	console.log("Received request to close valve " + req.params.id + "...");
	// CHECK FOR VALID GPIO (server specified)
	var valid = false;
	// IF VALID, RUN PY SCRIPT
	if(parseInt(req.params.id) < 5 && parseInt(req.params.id) > 0){
		valid = true;
	}
	if(valid == true){
		var options = {
			scriptPath: __dirname + "/py_scripts/",
			pythonOptions: ['-u'],
			args: gpios[parseInt(req.params.id)-1]
		};
		PythonShell.run("closeValve.py", options, function(err, results){
			if(err) throw err;
			console.log("Successfully closed valve " + req.params.id + "...");
			res.send("Successful");
		});
	}else{
		console.log("ERROR: Invalid GPIO port request.");
	}
});

app.listen(8000);
