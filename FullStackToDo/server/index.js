const express = require('express');
const app = express();
const CORS = require('cors');

//Mongoose connections.
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ToDo', {useNewUrlParser: true , useUnifiedTopology: true });


//For post request.
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:false})) 
app.use(bodyparser.json()) 


app.use(CORS);

//Import Models.
const todoModel = require('./Schemas/todo');


app.post('/add'  , async (req,res) => {
    const dummy = new todoModel({id : Math.random() , data : req.body.data});
    dummy.save(function(err , data){
        if(err) return console.error(err.message);
        res.json(data);
    })
})


app.listen(5000 , () => console.log('Server is ready to rock'));