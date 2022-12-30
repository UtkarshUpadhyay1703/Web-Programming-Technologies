const http=require("http");
const fs=require("fs");
const url=require("url");
const c=require("./Circle");
const r=require("./Rectangle");
const t=require("./Triangle");
server=http.createServer(function(req,resp){
    var q=url.parse(req.url,true);
    resp.writeHeader(200,{'content-type':'text/html'})
    switch(q.pathname){
        case "/":
            rs=fs.createReadStream("./front.html");
            rs.pipe(resp);
            break;
            case "/calculation":
                switch(q.query.)
                break;
    }
})