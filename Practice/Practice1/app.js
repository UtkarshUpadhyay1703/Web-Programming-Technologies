const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyparser = require("body-parser");
const routes = require("./router/routes");
mongoose.promise = global.promise;
const Url = "mongodb://127.0.0.1:27017/test"
mongoose.connect(Url, {connectTimeoutMS:1000},function (err, result) {
    if (err) {
        console.log("error occured");
    } else {
        console.log("Connection done with mongodb server");
    }
});
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(function (req, resp, next) {
    resp.setHeader("Access-Control-Allow-Origin", "*");
    resp.setHeader("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT");
    resp.setHeader("Access-Control-Allow-Headers", "Text");
    resp.setHeader("Access-Control-Allow-Credencials", true);
    next();
});
app.use("/", routes);
app.listen(4000);

console.log("server started at port number 4000");
module.exports=app;