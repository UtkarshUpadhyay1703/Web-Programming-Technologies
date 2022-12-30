const http = require("http");
const fs = require("fs");
const url = require("url");
const m = require("./mymodule");
server = http.createServer(function (req, resp) {
    var q = url.parse(req.url, true);
    resp.writeHeader(200, { 'content-type': 'text/html' })
    switch (q.pathname) {
        case "/":
            rs = fs.createReadStream("./front.html");
            rs.pipe(resp);
            break;
        case "/display":
            var num = parseInt(q.query.num);
            if (num < 5) {
                var ans = m.factorial(num);
                // resp.write("<h3>Factorial : " + ans + "</h3>");
                resp.
                resp.end();
            }
            else if (num >= 5 && num < 10) {
                var ans = m.myprime(num);
                resp.write("<h3>Primary number : " + ans + "</h3>")
                resp.end();
            }

            else {
                str = "";
                for (var i = 1; i <= 10; i++) {
                    str = str + num + " * " + i + " = " + num * i + "<br>"
                }
                resp.write(str);
                resp.end();
            }
            break;
    }
});
server.listen(3000);
console.log("server running on port 3000");