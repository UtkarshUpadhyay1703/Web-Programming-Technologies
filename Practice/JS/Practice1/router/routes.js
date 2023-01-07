const express=require("express");
const mongoose=require("mongoose");
const router=express.Router();
const schema=mongoose.Schema;

var empSchema=new schema({
    empid:String,
    ename:String,
    sal:String
});

var Emp=mongoose.model('empTable',empSchema,'empTable');

router.get("/employee",function(req,resp){
   Emp.find().exec(function(err,data){
    if(err){
        resp.status(500).send("No data found");
    }
    else{
        resp.send(data);
    }
});
});

router.get("/employee/:empid",function(req,resp){
    Emp.find({empid:req.params.empid}.exec(function(err,data){
        if(err){
            resp.status(500).send("data not found");
        }else{
            resp.send(data);
        }
        }))
});

//adding new Employee
router.post("/employee",function(req,resp){
    var emp=new Emp({
        empid:req.body.empid,ename:req.body.ename,sal:req.body.sal});
    emp.save(function(err,data){
        if(err){
            resp.status(500).send("not added");
        }else{
            resp.send(data);
        }
    })
})

//edditing using 

router.put("/employee/:empid",function(req,resp){
    Emp.findOne({empid:req.body.empid},function(err,doc){
        if(err){
            resp.status(500).send("Not updated data");
        }else{
            doc.empid=req.body.empid;
            doc.ename=req.body.ename;
            doc.sal=req.body.sal;
            doc.save(function(err,data){
                if(err){
                    resp.status(500).send("not updated data");
                }else{
                    resp.send(data);
                }
            })
        }
    })
});


router.delete("/employee/:empid",function(req,resp){
    Emp.remove({empid:req.params.empid},function(err,data){
        if(err){
            resp.status(500).send("no data found");
        }else{
            resp.status(200).send("data deleted successfully");
        }
    })
})


module.exports=router;