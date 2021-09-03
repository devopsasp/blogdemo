const blogdata=require('./blogdata')
const MongoClient=require('mongodb').MongoClient
const express=require('express')
const app=express()
const cors=require('cors')

app.use(cors())
app.use(express.json())
const swaggerUi = require("swagger-ui-express")
swaggerDocument = require("./swagger.json");




app.use(
    '/api-docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
  );
app.listen("9000",()=>{
console.log("server started")
})

var url = "mongodb://127.0.0.1:27018/";
var db_name="blogdb";
var collection_name="blogs"
MongoClient.connect(url,function(err,db){
    console.log('connected')
 console.log(err)
 try{
dbo.createCollection('blogcollection')
 }
 catch(e)
 {
 console.log('collection exists')
 }
 var dbo= db.db(db_name);
 console.log(err)
 console.log(dbo)
 app.get("/blogs",(req,res)=>{
  
dbo.collection('blogcollection').find({}).toArray(function(err,result){
    if(err) throw err;
    res.send(result)
})
})
app.post("/addblog",(req,res)=>{
    dbo.collection('blogcollection').insertOne(req.body,function(err,result){
        res.send("document inserted")
    })    
}) 
})


