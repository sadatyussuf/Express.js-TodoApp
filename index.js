const express = require('express')
//import express from 'express'
const mongoose = require('mongoose')
const  bodyParser = require('body-parser')
const path = require('path')

const app = express()


//Middleware 
app.use(express.static('public'))
//
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



//Load Route
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug')


//Home
app.get('/',(req,res)=>{
   // res.render('index')
    res.send("This is the Landing Page to the ToDOAPP")
})


//DataBase
mongoose.connect(
    'mongodb+srv://Sadat:asyissah@cluster0.4xoos.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true,useUnifiedTopology: true  },
    ()=>{
    console.log('connected to mdb')
})


    // Routers
const todoRouter = require('./routes/todo')

app.use('/todos',todoRouter)
    


// Start Server
app.listen(3000,()=>{
    console.log('Express is listening to port 3000')
})

