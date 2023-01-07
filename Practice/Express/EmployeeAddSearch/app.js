const express=require("express");
const bodyparser =require("body-parser");
const app=express();
const moduleArr=require("./public/module");

app.use(bodyparser.urlencoded({extended : false}));

app.get("/",(req,resp)=>{
    resp.sendFile("./public/form.html",{root:__dirname});
});

app.post("/Add",(req,resp)=>{
    var id=req.body.inp1;
    var name=req.body.inp1;
    var desg=req.body.inp1;
    var obj={id,name,desg};
    moduleArr.Add(obj);
    console.log("Successfull");
    console.log(moduleArr.Length());
})

app.get("/Search",(req,resp)=>{
    var id=req.query.inp4;
    console.log(moduleArr.Search(id));
})

app.listen(3000);
console.log("running on port number 3000");