var laugh = function(num) {
  var has = "";
  for (i = 1; i <= num; i++) {
    has += "ha";
    if (i === num) {
      has += "!";
    }
  }
  return has;
}

console.log(laugh(10));


var cry = function named() {
  console.log("boohoo!");
}


cry();








// don't change this code
// emotions() function definition
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}


/*
function format(myFunction, val) {
  myFunction(val);
}
*/






  emotions("happy", function myFunc(num) {
    var has = "";
    for (i = 1; i <= num; i++) {
      has += "ha";
      if (i === num) {
        has += "!";
      }
    }
    return has;
  });