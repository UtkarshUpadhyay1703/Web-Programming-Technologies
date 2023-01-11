const express=require("express");
const app=express();
const mongoose=require("mongoose");
const router=require("./Router/Routes");
const bodyparser=require("body-parser");

mongoose.promise=global.promise;

var url="mongodb://127.0.0.1:27017/test";

mongoose.connect(url,(err,result)=>{
    if(err){
        console.log("Connection rejected");
    }
    else{
        console.log("Connection done");
    }
});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use((req,resp,next)=>{
    resp.setHeader("Accesss-Control-Allow-Origin","*");
    resp.setHeader("Access-Control-Allow-Credentials",true);
    resp.setHeader("Access-Control-Allow-Headers","Content-Type");
    resp.setHeader("Access-Control-Allow-Methods","POST,PUT,DELETE,GET");
    next();
});
app.use("/",router);
app.listen(3000);
console.log("Connection done at port 3000");

module.exports=app;