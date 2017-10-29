var http = require("http");
var route = require("./a_route");

var server = http.createServer(function(request,response){
	route.process(request,response);
});

server.listen(8090,function(){
	console.log("server's running...");
});


// 1. 서버를 연결한다