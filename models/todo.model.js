const mongoose = require("mongoose");

//Building the database schema
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    todo:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

const Todos = mongoose.model('Todos',todoSchema);

module.exports = Todos;