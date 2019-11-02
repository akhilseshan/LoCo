var express = require('express');
var transferSchemaModel = require('./models/transfer.js');
var userSchemaModel = require('./models/user.js');
var request = require('request');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
var todocontroller = require('./controllers/todocontroller');
var app = express();

app.get('/', function (req, res) {
    res.send('GET request to the homepage')
  });



app.set('view engine', "ejs");

app.use(express.static('./public'))

mongoose.connect("mongodb://usermee_30:aim2reach@cluster0-shard-00-00-yofix.mongodb.net:27017,cluster0-shard-00-01-yofix.mongodb.net:27017,cluster0-shard-00-02-yofix.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to mongodb');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/efgh', (req, res) => {

    console.log(req.body);
    var pickup = req.body.item1;
    var destination = req.body.item2;


    console.log("Pickup:", pickup);
    console.log("Destination:", destination);

    
    transferSchemaModel.find({Stops:{$all:[pickup,destination]}}).then((currenttransferSchemaModel) => {
       var stopofbus=currenttransferSchemaModel[0].Stops;
       var stopofmet=currenttransferSchemaModel[1].Stops;
       console.log(stopofmet);
       console.log(stopofbus);
           transferSchemaModel.find({Stops})
    });
});

app.post('/abcd', (req, res) => {

    console.log(req.body);
    var mode_use=req.body.mode;
    var mode_no = req.body.id_code;
    var Startpt = req.body.item1;
    var Endpt = req.body.item2;
    var Sttime = req.body.StartTime;
    var Entime = req.body.EndTime;
    var stopwhere = [req.body.Stop00, req.body.Stop01, req.body.Stop02, req.body.Stop03, req.body.Stop04, req.body.Stop05, req.body.Stop06];
    var frequent = req.body.freq;
    console.log(stopwhere);
    new transferSchemaModel({
        mode:mode_use,
        mode_id: mode_no,
        Start: Startpt,
        End: Endpt,
        StartTime: Sttime,
        EndTime: Entime,
        Stops: stopwhere,
        freq: frequent


    }).save().then((currenttransferSchemaModel) => {
        console.log(currenttransferSchemaModel);
        console.log("Details added successfully");
    });
});

app.get('/abcd', (req, res) => {
    res.render('enter');
});

todocontroller(app);

app.listen(3000);

console.log('you are listening to port 3000');