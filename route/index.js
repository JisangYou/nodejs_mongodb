var u = require("url");
var bbs = require("../db");

exports.process = function(request){
    var url = u.parse(request.url);
    var method = request.method.toLowerCase();
	var cmds = url.pathname.split("/");
	if(cmds[1]== "bbs"){
        if(method == "GET"){
            bbs.read();
            
	}else if(method == "post"){
        bbs.create();
	}else if (method == "put"){
        bbs.update();
    }else if(method == "delete"){
        bbs.delete();
    }
}else{

}
}