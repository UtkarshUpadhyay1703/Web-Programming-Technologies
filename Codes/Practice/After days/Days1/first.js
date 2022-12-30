const express=require("express");
const bodyparser=require("body-parser");
const app=express();
const m=require("./module1");
app.use(bodyparser.urlencoded({extended:false}));
app.get("/",function(req,resp){
    resp.sendFile("/public/first.html",{root:__dirname})
});
app.get("/calculate",function(req,resp){
    var n1=req.query.num1;
    var n2=req.query.num2;
    var answer=m.add(n1,n2);
    resp.send("Answer = "+answer);
})
app.listen(3100);
console.log("server is running on port number 3000");