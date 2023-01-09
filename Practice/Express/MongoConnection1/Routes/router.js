var express=require("express");
var router=express.Router();
var mongoose=require("mongoose");
var schema=mongoose.Schema;

var empSchema=new schema({
    empid:String,
    ename:String,
    sal:String
})

var Emp=mongoose.model("empTable",empSchema,"empTable");

router.get("/employee",(req,resp)=>{
    Emp.find().exec((err,data)=>{
        if(err){
            resp.status(500).send("error in find()");
        }
        else{
            console.log(data);
            resp.send(data);
        }
    })
})

router.get("/employee/:empid",(req,resp)=>{
    Emp.find({empid:req.params.empid}).exec((err,data)=>{
        if(err){
            resp.status(500).send("error in find(id)");
        }else{
            console.log(data);
            resp.send(data);
        }
    });
})

router.post("/employee",(req,resp)=>{
    var emp=new Emp ({empid:req.body.empid,ename:req.body.ename,sal:req.body.sal})
    emp.save((err,data)=>{
        if(err){
            resp.status(500).send("Not added");
        }else{
            console.log(data);
            resp.send(data);
        }
    });
})

router.put("/employee/:empid",(req,resp)=>{
    Emp.findOne({empid:req.body.empid},(err,doc=>{
        if(err){
            resp.status(500).send("not updated");
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
    }));
})

router.delete("/employee/:empid",(req,resp)=>{
    Emp.remove({empid:req.body.empid},(err,data)=>{
        if(err){
            resp.status(500).send("Not deleted");
        }else{
            console.log(data);
            resp.send(data);
        }
    })
})

module.exports=router;