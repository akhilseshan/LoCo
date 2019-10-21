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


    app.post('/efgh', (req,res) => { 
    
    console.log(req.body);
    var localuser1 = req.body.pickup;
    var localuser2 = req.body.destination;
     
        
    console.log(localuser1);
    console.log(localuser2);

    new userSchemaModel({
        pickup:localuser1,
        destination:localuser2,
     
        
    }).save().then((userSchemaModel) => {
        console.log('efgh', userSchemaModel);
    });

   

    
});

app.get('/efgh',(req,res) => {
     
    
    request("https://www.google.com/maps/embed/v1/directions?key=AIzaSyB_dvpiDyg07irvwzeHg2afFILSaXRXH7E&origin=" +{localuser1:req.get('pickup')}+ "&destination=" +{localuser2:req.get('destination')}+"&avoid=tolls|highways", function (error, response, body){
    //request("https://www.google.com/maps/embed/v1/directions?key=AIzaSyB_dvpiDyg07irvwzeHg2afFILSaXRXH7E&origin=" +localuser1+ "&destination=" +localuser2+"&avoid=tolls|highways", function (error, response, body) {
    console.log(req.body);   
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
});
    
});





todocontroller(app);

app.listen(3000);

console.log('you are listening to port 3000');