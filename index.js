// ---------------check node js--------------
// function data(a,b) {
//     console.log('a+b=', a+b)
// }

// data(15, 17)

// --------------------http server check--------------
// const http = require("http");

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write("Hello World!");
//     res.end();
//   })
//   .listen(5000);

// ------------------http server test with url---------------
// const http = require('http');
// const url = require('url');

// http.createServer(function(req, res){
//     res.writeHead(200, { "Content-Type": "text/html" });
//     var q = url.parse(req.url, true).query;
//     var txt = q.year + " " + q.month + " " +q.day;
//     res.end(txt);
// }).listen(5000)

// -----------------url module test-----------------------
// const http = require("http");
// const url = require("url");
// const fs = require("fs");

// http
//   .createServer(function (req, res) {
//     let q = url.parse(req.url, true);
//     let filename = "." + q.pathname;
//     fs.readFile(filename, function (err, data) {
//       if (err) {
//         res.writeHead(404, { "Content-Type": "text/html" });
//         return res.end("404 Not Found");
//       }
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(data);
//       return res.end();
//     });
//   })
//   .listen(5000);
// ---------------------------postman check------------------------

