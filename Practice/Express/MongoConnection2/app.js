const express=require("express");
const app=express();
const mongoose=require("mongoose");
const bodyparser=require("body-parser");
const router=require("./Routers/Routes");
//till now these all are to be imported and created a object;

//now we have to create promise of mongoose with global
mongoose.promise=global.promise;

//now we have to give the path of url
var url="mongodb://127.0.0.1:27017/test"

//now we have to connect to mongo
mongoose.connect(url,(err,result)=>{
    if(err){
        console.log("problem with mongo");
    }
    else{
        console.log("connected with monngo");
    }
});

//write all the 4 middlewares
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use((req,resp,next)=>{
    resp.setHeader("Access-Control-Allow-Origin","*");
    resp.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,DELETE");
    resp.setHeader("Access-Control-Allow-Credentials",true);
    resp.setHeader("Access-Control-Allow-Headers","Content-Type");
    next();
})
app.use("/",router);
app.listen(3000);
console.log("Running on port number 3000");
module.exports=app;