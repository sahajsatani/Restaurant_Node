let http = require('http');
http.createServer(function(req,res){
    console.log("Server created");
    res.end();
}).listen(8000);