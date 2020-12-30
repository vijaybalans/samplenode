//default package import
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

const port = 5001;

//routes import
const rStudent = require('./routes/rstudent');



//routing configuration

app.use('/app', express.static(path.join(__dirname, '/public/')));

app.get("/", function (req, res){
	//res.send("Helllo vijay");
	res.sendFile(__dirname + '/public/index.html');
});

//other data
app.get("/getstudentlist", rStudent.getAllStudent);


//database start related
const dbOptions = {useNewUrlParser:true, useUnifiedTopology:true};

mongoose
	.connect("mongodb://127.0.0.1/test", dbOptions)
	.then(function(){
		console.log("database connected");
	})
	.catch((err)=> console.log(err));



//server start related
app.listen(port, function(){
	console.log("server started");
});
