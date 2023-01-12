const express=require("express");
const mongoose=require("mongoose");
const Router=express.Router();
const schema=mongoose.Schema;


var StudSchema=new schema({
    Id:String,
    Name:String,
    Branch:String
});

var Stud=mongoose.model("student",StudSchema,"end");

Router.get("/student",(req,resp)=>{
    Stud.find((err,result)=>{
        if(err){
            resp.status(500).send("cannot get the data");
        }
        else{
            resp.send(result);
        }
    })
});

Router.get("/student/:Id",(req,resp)=>{
    Stud.find({Id:req.params.Id},(err,result)=>{
        if(err){
            console.log("error in get id");
            resp.status(500).send("cannot get the data by id");
        }else{
            resp.send(result);
        }
    })
})

Router.post("/student",(req,resp)=>{
    var stud= new Stud({Id:req.body.Id,Name:req.body.Name,Branch:req.body.Branch});
    stud.save((err,data)=>{
        if(err){
            console.log("error in post");
            resp.status(500).send("error in post method");
        }
        else{
            resp.send(data);
        }
    })
});

Router.put("/student/:Id",(req,resp)=>{
    Stud.findOne({Id:req.params.Id},(err,doc)=>{
        if(err){
            console.log("error in put");
            resp.status(500).send("error in put method ");
        }else{
            doc.Id=req.body.Id;
            doc.Name=req.body.Name;
            doc.Branch=req.body.Branch;
            doc.save((err,data)=>{
                if(err){
                    console.log("error in put after");
                    resp.status(500).send("error in put after method ");
                }else{
                    resp.send(data);
                }
            })
        }
    })
});

Router.delete("/student/:Id",(req,resp)=>{
    Stud.remove({Id:req.params.Id},(err,data)=>{
        if(err){
            console.log("error in delete");
            resp.status(500).send("error in delete method");
        }
        else{
            resp.send(data);
        }
    })
})

module.exports=Router;