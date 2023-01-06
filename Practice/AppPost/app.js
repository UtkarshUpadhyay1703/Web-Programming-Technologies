const express=require("express");
const app=express();
const bodyparser=require("body-parser");
const m=require("./public/module");
app.use(bodyparser.urlencoded({extended:false}));
app.get("/",(req,resp)=>{
    resp.sendFile("./public/home.html",{root:__dirname});
})
app.post("/Add",(req,resp)=>{
    var number1=req.body.inp1;
    var number2=req.body.inp2;
    var result=m.Add(number1,number2);
    resp.send("Addition : "+result);
})
app.listen(3000);
console.log("running on port 3000");