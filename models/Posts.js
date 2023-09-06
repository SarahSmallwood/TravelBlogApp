//Model connected to Mongo

const mongoose = require('mongoose');
const Schema =mongoose.Schema

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },author: {
        type: String,
        required: true
    },text: { 
        type: String, 
        required: true 
    },image: { 
        type: String, 
        },
        
});
module.exports = mongoose.model('Posts', postSchema);