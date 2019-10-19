const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema for storing meeting details
const routes = new Schema({
    Departure:Time,
    Bus_id: String,
    Metro_id:String,
    Walk:String,
    Arrival:String,  
});

const Path = mongoose.model('path',routes);

module.exports = Path;