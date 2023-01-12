const express=require("express");
const mongoose=require("mongoose");
const schema=mongoose.Schema;
const Router=express.Router();

var Hapschema=new schema({
    id:Number,
    name:String,
    location:String
});

var Happ=mongoose.model('happy',Hapschema,'happy');

Router.get("/happy",(req,resp)=>{
    Happ.find((err,data)=>{
        if(err){
            console.log("error in get");
            resp.status(500).send("error in get");
        }
        else{
            resp.send(data);
        }
    })
});


Router.get("/happy/:id",(req,resp)=>{
    Happ.findOne({id:req.params.id}).exec((err,data)=>{
        if(err){
            console.log("error in getid");
            resp.status(500).send("error in getid");
        }else{
            resp.send(data);
        }
    });
});

Router.post("/happy",(req,resp)=>{
    var happ=new Happ({id:req.body.id,name:req.body.name,location:req.body.location});
    happ.save((err,data)=>{
        if(err){
            console.log("error in post id");
            resp.status(500).send("error in post");
        }else{
            resp.send(data);
        }
    });
});

Router.put("/happy/:id",(req,resp)=>{
    Happ.findOne({id:req.params.id},(err,doc)=>{
        if(err){
            console.log("error in put id");
            resp.status(500).send("error in put");
        }else{
            doc.id=req.body.id;
            doc.name=req.body.name;
            doc.location=req.body.location;
            doc.save((err,data)=>{
                if(err){
                    console.log("error in put id method");
                    resp.status(500).send("error in put method");
                }else{
                    resp.send(data);
                }
            });
        }
    });
});

Router.delete("/happy/:id",(req,resp)=>{
    Happ.remove({id:req.params.id},(err,data)=>{
    if(err){
        console.log("error in delete");
        resp.status(500).send("error on delete");
    }else{
        resp.send(data);
    }
});
});

module.exports=Router;