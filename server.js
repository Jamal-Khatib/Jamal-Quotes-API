const express = require("express");
const mongoose = require("mongoose");
const Quote = require("./models/quote");
const url = require("url");
const bodyParser = require("body-parser");
const app = new express();
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());



const URI = "mongodb+srv://jamal:j1a2m3a4l5@cluster0.6vwvu.mongodb.net/firstDB?retryWrites=true&w=majority";
app.use(express.urlencoded({ extended: true }));

mongoose.connect(URI)
    .then((result) => {
        app.listen(3000);
        console.log("Server listening on port 3000");
    })
    .catch((error) => {
        console.log("This is the error" + error);
    })

app.get("/quotes",(req,res)=>{
    Quote.find()
    .then((result)=> {
        res.send(result) ; 
    })
})

app.get("/quotes/:type",(req,res)=>{
    Quote.find({type: req.params.type})
    .then((result)=> {
        // console.log(result) ; 
        res.send(result) ; 
    })
})

app.post("/quotes/:type",(req,res)=> {
    var type = req.params.type ; 
    const q  = new Quote({
        type: type, 
        name : req.query.name, 
        content : req.query.content
    }); 
    q.save()
    .then((result) =>{
        res.send("Quote is added!")
    })
    .catch((error)=>{
        res.send("Quote is not added..."+ error)
    })
})



app.delete("/quotes/:type",(req,res)=>{
    Quote.findOneAndRemove({"name":req.query.name},(err,member)=> { res.send("Quote is deleted !")}) ; 
})







