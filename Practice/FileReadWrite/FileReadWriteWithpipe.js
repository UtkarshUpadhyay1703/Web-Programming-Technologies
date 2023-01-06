const fs=require("fs");
rs=fs.createReadStream("file.txt");
// wr=fs.createWriteStream("write.txt");
// rs.pipe(wr);

var d="";
rs.on("data",(chunk)=>{
    d=d+chunk;
    console.log("lol");
});

rs.on("end",()=>{
    console.log(d);
})
