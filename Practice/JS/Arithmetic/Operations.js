// const m1=require("./Modules");
// var result=m1.Addition(5,6);
// console.log(result);

const http = require("http");
const url = require("url");
const fs = require("fs");
const m1 = require("./Modules");
server = http.createServer((req, resp) => {
    var q = url.parse(req.url, true);
    resp.writeHeader(200, {"content-type":"text/html"})
    switch (q.pathname) {
        case "/":
            var wr = fs.createReadStream("./Public/Home.html");
            wr.pipe(resp);
            break;
        case "/Arithmetic":
            var wr = fs.createReadStream("./Public/Arithmetic.html");
            wr.pipe(resp);
            break;
        case "/Solution":
            switch (req.require.btn){
                case "Addition":
                    var result=m1.Addition(req.query.num1,req.query.num2);
                    resp.write("Addition : "+ result);
                    break;
                case "Subtract":
                    var result=m1.Subtract(req.query.num1,req.query.num2);
                    resp.write("Addition : "+ result);
                    break;
                case "Multiplication":
                    var result=m1.Multiplication(req.query.num1,req.query.num2);
                    resp.write("Addition : "+ result);
                    break;
                case "Division":
                    var result=m1.Division(req.query.num1,req.query.num2);
                    resp.write("Addition : "+ result);
                    break;
                case "Mod":
                    var result=m1.Mod(req.query.num1);
                    resp.write("Addition : "+ result);
                    break;
            }
            break;
    }
})
server.listen(3000);
console.log("running on port number : 3000");