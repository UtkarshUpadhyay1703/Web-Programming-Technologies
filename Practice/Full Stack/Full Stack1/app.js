const express=require("express");
const mongoose=require("mongoose");
const app=express();
const bodyparser=require("body-parser");
const Router=require("./Router/Routes");

mongoose.promise=global.promise;

var url="mongodb://127.0.0.1:27017/test"

mongoose.connect(url,(err,result)=>{
    if(err){
        console.log("error to connect with mongo");
    }else{
        console.log("Connection done with mongo");
    }
});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use((req,resp,next)=>{
    resp.setHeader("Access-Control-Allow-Origin","*");
    resp.setHeader("Access-Control-Allow-Credentials",true);
    resp.setHeader("Access-Control-Allow-Headers","Content-Type");
    resp.setHeader("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");
    next();
});

app.use("/",Router);

app.listen(4000);

console.log("running on port 4000");
module.exports=app;