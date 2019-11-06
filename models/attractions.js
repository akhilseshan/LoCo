const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema for storing meeting details
const attractSchema = new Schema({
    
    visit:String,
    near:String,
    category:String,
   
});

const Attract= mongoose.model('attract', attractSchema);

module.exports =Attract ;