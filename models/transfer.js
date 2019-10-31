const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema for storing meeting details
const transferSchema = new Schema({
    mode:String,
    mode_id: String,
    Start: String,
    End: String,
    StartTime: String,
    EndTime: String,
    Stops: [String]

});

const Transfer = mongoose.model('transfer', transferSchema);

module.exports = Transfer;