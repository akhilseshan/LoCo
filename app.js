var express=require('express');
var routesModel = require('./models/routes.js');
var userSchemaModel = require('./models/user.js');
var request = require('request');

const mongoose = require('mongoose');


var todocontroller=require('./controllers/todocontroller');
var app=express();

app.set('view engine',"ejs");

app.use(express.static('./public'))

mongoose.connect("mongodb://usermee_30:aim2reach@cluster0-shard-00-00-yofix.mongodb.net:27017,cluster0-shard-00-01-yofix.mongodb.net:27017,cluster0-shard-00-02-yofix.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",() =>{
    console.log('connected to mongodb');
});



app.get('/efgh',(req,res) => {
    new userSchemaModel({
        pickup: "localuser2",
        destination:""
     
        
    }).save().then((userSchemaModel) => {
        console.log('efgh', userSchemaModel);
    });
})

    //app.post('/efgh', (req,res) => { 
    //console.log(req.body);
    //request('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyAQEx35-uiMe9H881IvAjpECLbDCg30Jog', function (error, response, body) {
    //console.error('error:', error); // Print the error if one occurred
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body); // Print the HTML for the Google homepage.
//})
//})

todocontroller(app);

app.listen(3000);

console.log('you are listening to port 3000');