// function data(a,b) {
//     console.log('a+b=', a+b)
// }

// data(15, 17)

const http = require('http');

http.createServer(function(req, res){
    res.write('Hello World! my name is rajibul islam rajib');
    res.end();
}).listen(5000)