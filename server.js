const express = require ('express');
const bodyParser = require('body-parser');
const path = require('path');
const AWS = require('aws-sdk');
const app = express();

 

app.use(express.static('static'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', (req,res) => {
	res.sendFile(path.resolve(__dirname + '/static/index.html' ));
})

app.get('/about', (req,res) => {
	res.sendFile(path.resolve(__dirname + '/static/about.html' ));
})

app.post('/', (req,res) => {
	var name = req.body.name;
	var email = req.body.email;
	var newEmail = {name: name, email: email};
	emailList.create(newEmail, (err,emailAdd) => {
		if(err) {
			console.log(err);
		}
		else {
			console.log("email added");
			console.log(emailAdd);

		}
	})
})


app.post('/about', (req,res) => {
	var name = req.body.name;
	var email = req.body.email;
	var newEmail = {name: name, email: email};
	emailList.create(newEmail, (err,emailAdd) => {
		if(err) {
			console.log(err);
		}
		else {
			console.log("email added");
			console.log(emailAdd);

		}
	})
})

app.listen(4000,() => {
	console.log('App has started on port 3000')
});



// // SCHEMA SETUP
// const EmailSchema = new mongoose.Schema({
// 	name: String,
// 	email: String
// });

// const db = mongoose.connect("mongodb://127.0.0.1/emailList",function(err) {
// 	if(err) {throw err}
// 	else {
// 		console.log("emailList database has been connected");
// 	}
// });

// const emailDb = db.collection

// const emailList = mongoose.model("emailList", EmailSchema);

