const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema for storing meeting details
const routes = new Schema({
   Routes: Array,
           
    user2: String,
    startTime: Date,
    endTime: Date,
    status: String
});

const Path = mongoose.model('path',routes);

module.exports = Path;