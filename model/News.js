const mongoose = require('mongoose');
const {Schema} = mongoose;


const newsSchema = new Schema({
    heading: { type : String, required: true},
    content: { type : String, required: true},
    category: { type : String, required: true},
    image: { type : String, required: true},
    author: {type: String,required: true},
    // source: {type: String,required: true},
    language: {type: String,required: true},
    date: {type: Date,default: Date.now},
    sources:{ type : [String], required: true},
});

exports.News = mongoose.model('News',newsSchema);