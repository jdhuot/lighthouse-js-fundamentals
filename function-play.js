function sayHello () {
  var message = "Hello There!";
  return message;
}

console.log(sayHello());


function addThese (x,y) {
  var added = x + y;
  return added;
}


console.log(addThese(2,2));



function laugh(num) {
 
  var ha = "";
  for (i = 1; i <= num; i++) {
    ha += "ha";
    if (i === num){
      ha += "!";
    }
  }
  return ha;

}

console.log(laugh(3));


function isThisWorking(input) {
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
  return "Returning: I am returning this string!";
}

isThisWorking(3);

function add(x, y) {
  return x + y;
}

function half(num) {
  return num / 2;
}

sum = add(3, 6);
average = half(sum);

console.log("Sum of 3 and 6 = " + sum);
console.log("Average of 9 = " + average);


/*

function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

function tri(num) {
 
  var star = "";
  for (i = 1; i <= num; i++) {
    star += "*";
  }
  return star;

}

console.log(makeLine(5));

console.log(tri(10));

*/



// take val and print *

// 


/*
function makeLine(length){

  var line = ""; 
  var num = length;
  for (i = 0; i < num; i++) {
    line += "* ";
    if (line.length === i) {
    line += "\n";
    }
    console.log(line); 
  }

}


console.log(makeLine(10));
*/






function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line; //+ "\n";
}




function buildTriangle(int) {

  for (var z = 1; z <= int; z++) {
    console.log(makeLine(z)); 
  }
}

buildTriangle(10);






var catSays = function(max) {
  var catMessage = "";
  for (i = 0; i < max; i++) {
    catMessage += "meow! ";
  }
  return catMessage;
}

catSays;


function myFunc(x, y) {
  x(y);
}

myFunc(function logg(p) {
  console.log("num " + p); }, 2);


  // Function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the function and name of movie
movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");