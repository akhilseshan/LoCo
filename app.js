var express=require('express');

const mongoose = require('mongoose');


var todocontroller=require('./controllers/todocontroller');
var app=express();

app.set('view engine',"ejs");

app.use(express.static('./public'))

mongoose.connect("mongodb://usermee_30:aim2reach@cluster0-shard-00-00-yofix.mongodb.net:27017,cluster0-shard-00-01-yofix.mongodb.net:27017,cluster0-shard-00-02-yofix.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",() =>{
    console.log('connected to mongodb');
});


todocontroller(app);

app.listen(3000);

console.log('you are listening to port 3000');