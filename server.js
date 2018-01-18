const express = require ('express');
const bodyParser = require('body-parser');
const path = require('path');
const AWS = require('aws-sdk');
const app = express();

var dbFunc = require("./dbfunc");


app.use(express.static('public'));
app.set("view engine", "ejs");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// *************** DYNAMODB CONFIG AND SETUP ***************

AWS.config.update({
	region: "us-east-1"
});
AWS.config.dynamodb = {
	endpoint: "dynamodb.us-east-1.amazonaws.com"
}

let docClient = new AWS.DynamoDB.DocumentClient();

// let myCredential = AWS.config.getCredentials(function(err) {
//   if (err) console.log(err.stack); 
//   else console.log("Access Key and SecretAccessKey Obtained");
// });

// *************** ROUTES ***************

app.get('/', (req,res) => {
	res.render("index");
})

app.get('/about', (req,res) => {
	res.render("about");
})

app.get('/confirm', (req,res) => {
	let user = {
		email: "adrianlayton@gmail.com",
		name: "Adrian Layton"
	}
	res.render("confirm",{user: user});
})

app.get('/contact', (req,res) => {
	res.render("contact");
})

app.post('*', (req,res) => {
	let table = "testDb";
	let name = req.body.name;
	let email = req.body.email;
	let user = {email: email, name: name};
	dbFunc.makeParams(user, table);
	// let params = {
	// 	TableName:table,
	// 	Item:{	
	// 		"email": email,
	// 		"name": name
	// 		}
	// 	}

	console.log("Adding a new item...");

	docClient.put(params, function(err, data) {
	    if (err) {
	        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
	    } else {
	        console.log("Added item:", JSON.stringify(data, null, 2));
		}
})
	res.render("confirm");
})


app.listen(4000,() => {
	console.log('App has started on port 4000')
});
