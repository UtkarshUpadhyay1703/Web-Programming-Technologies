// const fs=require("fs");
// fs.writeFileSync("file.txt","Hello");
// var data=fs.readFileSync("file.txt");
// console.log(data.toString());

const fs=require("fs");
fs.readFile("file.txt",(err,data)=>{
    if(err){
        console.log("error"+err);
    }
    else{
        console.log(data.toString());
    }
})

fs.stat=("file.txt",(err,status)=>{
    if(err){
        console.log("error"+err);
    }
    else{
        console.log(status);
        console.log(status.isFile());
        console.log(status.isDirectory());
        console.log(status.size);
    }
})

