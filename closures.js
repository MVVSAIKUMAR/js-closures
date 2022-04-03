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

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        ""outerArg = "" + outerArg + ""\n"" +
        ""innerArg = "" + innerArg + ""\n"" +
        ""outerVar = "" + outerVar + ""\n"" +
        ""innerVar = "" + innerVar + ""\n"" +
        ""globalVar = "" + globalVar);
    
    })(456);
})(123);