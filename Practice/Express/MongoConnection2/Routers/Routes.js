const express=require("express");
const mongoose=require("mongoose");
const Router=express.Router();
const schema=mongoose.Schema;

//Creating schema of the table
var EmpSchema=new schema({
    empid:String,
    ename:String,
    sal:String
})

//creating model 
var Emp=mongoose.model("empTable",EmpSchema,"empTable");

//Writing Routing part
//by this we get the full employee objects
Router.get("/employee",(req,resp)=>{
    Emp.find((err,data)=>{
        if(err){
            resp.status(500).send("error in find");
        }else{
            console.log(data);
            resp.send(data);
        }
    })
})

//By this we get employee object from empid
Router.get("/employee/:empid",(req,resp)=>{
    Emp.find({empid:req.params.empid},(err,data)=>{
        if(err){
            resp.status(500).send("error in empid");
        }
        else{
            console.log(data);
            resp.send(data);
        }
    })
})

//By this we can add new employee object into Employee table
Router.post("/employee",(req,resp)=>{
    var emp=new Emp({empid:req.body.empid,ename:req.body.ename,sal:req.body.sal});
    emp.save((err,data)=>{
        if(err){
            resp.status(500).send("error in adding");
        }
        else{
            console.log(data);
            resp.send(data);
        }
    })
})

//by this we can update the existing employee
Router.put("/employee/:empid",(req,resp)=>{
    Emp.findOne({empid:req.params.empid},(err,doc)=>{
        if(err){
            resp.status(500).send("error in id ");
        }
        else{
            doc.empid=req.body.empid;
            doc.ename=req.body.ename;
            doc.sal=req.body.sal;
            doc.save((err,data)=>{
                if(err){
                resp.status(500).send("not updated");
                }
                else{
                    console.log(data);
                    resp.send(data);
                }
            });
        }
    })
})

//By this we can delete the existing employee
Router.delete("/employee/:empid",(req,resp)=>{
    Emp.remove({empid:req.body.empid},(err,data)=>{
        if(err){
            resp.status(500).send("error in deleting");
        }
        else{
            console.log(data);
            resp.send(data);
        }
    })
})

module.exports=Router;