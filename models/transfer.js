const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema for storing meeting details
const transferSchema = new Schema({
    Start:String ,
    End: String,
    StartTime:String,
    EndTime:String,
    Stop00:String,
    Stop01:String,
    Stop02:String,
    Stop03:String,
    Stop04:String,
    Stop05:String,
    Stop06:String,
    freq:String 
});

const Transfer = mongoose.model('transfer',transferSchema);

module.exports = Transfer;