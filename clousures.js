function x(){
    var a = 9;

    return function y(){
        console.log(a);
    }
var a =10;
   
}

var z = x();
console.log(z);

z();

