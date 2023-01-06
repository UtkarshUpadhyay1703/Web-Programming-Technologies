// const http=require("http");
// const fs=require("fs");
// const url=require("url");
const m = require("./module");
const express = require("express");
var app = express();
var bodeparser = require("body-parser");
app.use(bodeparser.urlencoded({ extended: false }));

// server=http.createServer(function(req,resp){
//     var q=url.parse(req.url,true);
//     resp.writeHeader(200,{'content-type':'text/html'})
// switch(q)//q.query.

// });

app.get("/", function (req, resp) {
    resp.sendFile("./calc.html", { root: __dirname });
});

app.get("/calculator", function (req, resp) {
    switch (req.query.btn) {
        case "addition":
            console.log("inside addition");
            var answer = m.Add(req.query.num1, req.query.num2);
            resp.send("Addition = " + answer);
            break;
        case "subtract":
            console.log("inside subtract");
            var answer = m.Subtract(req.query.num1, req.query.num2);
            resp.send("Subtract = " + answer);
            break;
        case "multiplication":
            console.log("inside multiplication");
            var answer = m.Multiplication(req.query.num1, req.query.num2);
            resp.send("Multiplication = " + answer);
            break;
        case "division":
            console.log("inside divide");
            var answer = m.Divide(req.query.num1, req.query.num2);
            resp.send("Divide = " + answer);
            break;
        case "square":
            console.log("Inside Square ");
            var answer = m.Square(req.query.num1);
            resp.send("Square : " + answer);
            break;
    }
})
app.listen(3000);
console.log("server is running on port 3000");