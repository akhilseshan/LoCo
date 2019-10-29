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
  })



  
app.set('view engine', "ejs");

app.use(express.static('./public'))

mongoose.connect("mongodb://usermee_30:aim2reach@cluster0-shard-00-00-yofix.mongodb.net:27017,cluster0-shard-00-01-yofix.mongodb.net:27017,cluster0-shard-00-02-yofix.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority", { useNewUrlParser: true , useUnifiedTopology: true }, () => {
    console.log('connected to mongodb');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/efgh', (req, res) => {

    console.log(req.body);
    var pickup = req.body.item1;
    var destination = req.body.item2;


    console.log("Pickup:",pickup);
    console.log("Destination:",destination);

    new userSchemaModel({
        pickup: this.pickup,
        destination: this.destination,


    }).save().then((userSchemaModel) => {
        console.log("Details added successfully");
    });
});

app.post('/abcd', (req, res) => {

    console.log(req.body);
    var Bus_no=req.body.id_code;
    var Startpt = req.body.item1;
    var Endpt= req.body.item2;
    var Sttime= req.body.StartTime;
    var Entime= req.body.EndTime;
    var first= req.body.Stops[0];
    var second= req.body.Stops[1];
    var third= req.body.Stops[2];
    var fourth= req.body.Stops[3];
    var fifth= req.body.Stops[4];
    var sixth= req.body.Stops[5];
    var seventh= req.body.Stops[6];
    var frequent=req.body.freq;

    console.log("Bus_id",Bus_no);
    console.log("Start:",Startpt);
    console.log("End:",Endpt);
    console.log("Starting Time:",Sttime);
    console.log("End Time:",Entime);
    console.log("Stop 1:",first);
    console.log("Stop 2:",second);
    console.log("Stop 3:",third);
    console.log("Stop 4:",fourth);
    console.log("Stop 5:",fifth);
    console.log("Stop 6:",sixth);
    console.log("Stop 7:",seventh);
    console.log("frequency:",frequent);

    new transferSchemaModel({
        Start: this.startpt,
        End: this.Endpt,
        StartTime:this.Sttime,
        EndTime:this.Entime,
        Stop00:this.first,
        Stop01:this.second,
        Stop02:this.third,
        Stop03:this.fourth,
        Stop04:this.fifth,
        Stop05:this.sixth,
        Stop06:this.seventh,
        freq:this.frequent


    }).save().then((transferSchemaModel) => {
        console.log("Details added successfully");
    });
});

app.get('/abcd', (req, res) => {
    res.render('enter');
   });


//app.get('/efgh', (req, res) => {
    
   // request("https://www.google.com/maps/embed/v1/directions?key=AIzaSyB_dvpiDyg07irvwzeHg2afFILSaXRXH7E&origin="+pick+"&destination="+dest+"&avoid=tolls|highways", function (error, response, body) {
       // console.error('error:', error); // Print the error if one occurred
       // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
       // console.log('body:', body); // Print the HTML for the Google homepage.
   // });

//});

//app.get('/abcd',(req,res)=>{
   // var mydoc=db.transferSchemaModel.find({Start:{$gt:Vytilla}});
 //print(json(mydoc))
 //console.log("found it");

//});
 

app.get('/efgh',(req,res) => {
    //get the value from form in the html page
    var start_main=JSON.parse(req.body.pickup);
    var end_main=JSON.parse(req.body.destination);
    
 var mydoc=transferSchemaModel.find( { Stops: { $all: ["vytilla", "edapally"]}} ).then((newtransferSchemaModel) => {
       console.log(newtransferSchemaModel);
   });
    console.log("pickup:",start_main);
    console.log("destination",end_main);

   if(mydoc)
   {    var dets=mydoc;
       console.log("Bus Found");

      var bus_rec=dets.id_code;
      var startWhere=dets.item1;
       var endWhere=dets.item2;
       console.log("Bus_id:",bus_rec);
       console.log("Starting From:",startWhere);
       console.log("Ends @:",endWhere);

  };

    res.render('/explore');
});



todocontroller(app);

app.listen(3000);

console.log('you are listening to port 3000');