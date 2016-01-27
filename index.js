var exec 	= require("child_process").exec
var bodyparser = require("body-parser")

var express = require("express")

var app = express()

app.use(express.static("public"))
app.use(bodyparser.json())
app.get("/", function (req, res) {
	
})

app.post("/", function(req, res){
	exec("ssh -i ~/Downloads/indix ec2-user@mesos-master.production.indix.tv "+req.body.cmd,function(err,stdout,stderr){
		res.send(stdout)
	})
})
app.listen(3000);