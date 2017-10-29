
// public 
exports.a =157;

//private 
var b = 137;


function sum(a,b){
	return a+b;
}

exports.sum = function(a,b){
	return a+b;
}