const express = require ('express');
const bodyParser = require('body-parser');
const path = require('path');
const request = require('superagent');
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

let myCredential = AWS.config.getCredentials(function(err) {
  if (err) console.log(err.stack); 
  else console.log("Access Key and SecretAccessKey Obtained");
});

// *************** ROUTES ***************

app.get('/', (req,res) => {
	res.render("index");
})

app.get('/about', (req,res) => {
	res.render("about");
})

app.get('/confirm', (req,res) => {
	res.render("confirm",{user: user});
})

app.get('/contact', (req,res) => {
	res.render("contact");
})

app.post('/', (req,res) => {
    const mailChimpApiKey = null;
    const mailChimpInstance = "us17";
    const listUniqueId = "baa4a9093b";
    const table = "Art-Email";
    const name = req.body.name;
    const email = req.body.email;
    const user = {email: email, name: name};
    

    console.log("Adding a new item... to emaillist");

    request
        .post('https://' + mailChimpInstance + '.api.mailChimp.com/3.0/lists/' + listUniqueId + '/members/')
        .set('Content-Type', 'application/json;charset=utf-8')
        .set('Authorization', 'Basic ' + new Buffer('any:' + mailChimpApiKey ).toString('base64'))
        .send({
          'email_address': user.email,
          'status': 'subscribed',
          'merge_fields': {
            'name': user.name,
          }
        })
            .end(function(err, response) {
              if (response.status < 300 || (response.status === 400 && response.body.title === 'Member Exists')) {
                console.log('Signed Up!');
              } else {
                console.log(err);
              }
    });
		// docClient.put(dbFunc.makeParams(user, table), function(err, data) {
	 //    if (err) {
	 //        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
	 //    } else {
	 //        console.log("Added item:", JSON.stringify(data, null, 2));
		// }
		// });
    
	res.render("confirm",{user});
})


app.listen(4000,() => {
	console.log('App has started on port 4000')
});
