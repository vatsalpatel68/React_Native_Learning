const { Mongoose } = require("mongoose");

const mongoose = require('mongoose');

var conn = mongoose.connection;

const todoSchema = mongoose.Schema({
    id : Number,
    data : String
})


const todoModel = mongoose.model('todos' , todoSchema);

module.exports = todoModel;