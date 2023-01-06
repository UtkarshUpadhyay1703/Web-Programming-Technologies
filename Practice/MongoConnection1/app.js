var express=require("express");
var app=express();
var bodyparser=require("body-parser");
var mongoose=require("mongoose");
var router=require("./Routes/router");
mongoose.promise=global.promise;
var url="mongodb://0.0.0.0:27017/test"
mongoose.connect(url,{connectTimeoutMS:1000},(err,result)=>{
    if(err){
        console.log("error in connection with mongo");
    }
    else{
        console.log("Connection done with mongo");
    }
});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use((req,resp,next)=>{
    resp.setHeader("Access-Control-Allow-Origin","*");
    resp.setHeader("Access-Control-Allow-Headers","Content-Type");
    resp.setHeader("Access-Control-Allow-Credentials",true);
    resp.setHeader("Access-Control-Allow-Methods","GET,DELETE,PUT,POST");
    next();
});

app.use("/",router);

app.listen(4000);
console.log("Connection done at port number : 4000");
module.exports=app;