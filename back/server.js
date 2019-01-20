var express = require("express");
let {PythonShell} = require('python-shell');

var gpios = ["6", "26", "13", "19"];

var app = express();

app.get("/open/:id", function(req, res){
	console.log("Received request to open valve " + req.params.id + "...");
	var valid = false;
	for(var i = 0; i < gpios.length; i++){
		if(gpios[i] == req.params.id){
			valid = true;
			break;
		}
	}
	if(valid == true){
		var options = {
			scriptPath: "py_scripts/",
			pythonOptions: ['-u'],
			args: req.params.id
		};
		PythonShell.run("valve.py", options, function(err, results){
			if(err) throw err;
			res.send("Successful");
		});
	}else{
		console.log("ERROR: Invalid GPIO port request.");
	}
});

app.listen(8000);
