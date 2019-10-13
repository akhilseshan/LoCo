var express=require('express');

const mongoose = require('mongoose');

var todocontroller=require('./controllers/todocontroller');
var app=express();

app.set('view engine',"ejs");

app.use(express.static('./public'))

mongoose.connect(keys.mongodb.dbURI,() => {
    console.log('connected to mongodb');
});


todocontroller(app);

app.listen(3000);

console.log('you are listening to port 3000');