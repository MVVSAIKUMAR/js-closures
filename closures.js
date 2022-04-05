    function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = Counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());


let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); 
  }
  console.log(count); 
})();
for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); 
  }, 1000);
}

var a = 12;
(function () {
  alert(a);
})();
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();
var globalVar = ""xyz"";

//   Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

 function OuterFunction() {

    var  length= 20;

    function InnerFunction() {
        var width=10;
        var area;
        console.log(area=length*width);
    }

    return InnerFunction;
 }
 var innerFunc = OuterFunction();

 innerFunc(); 

//Take a variable in outer function and create an inner function to increase the counter every time it is called
function Outerfunc(){
    let count=0;
    return function Innerfunc(){
     return count++;
    }
}
let getFunction=Outerfunc();
console.log(getFunction());
console.log(getFunction());
console.log(getFunction());
console.log(getFunction());
console.log(getFunction());
console.log(getFunction());
console.log(getFunction());
console.log(getFunction());
