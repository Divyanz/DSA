/*Create a function that determines whether a number is Oddish or Evenish. 
A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if
 the sum of all of its digits is even. If a number is Oddish, return "Oddish". 
 Otherwise, return "Evenish". */

function oddishOrEvenish(num) {
  let stringOfnum = num.toString();
  let arrOfnum = stringOfnum.split("");
  var finalAnswer = 0;

  for (i = 0; i < arrOfnum.length; i++) {
    finalAnswer += parseInt(arrOfnum[i]);
  }
  return finalAnswer % 2 == 0 ? "Evenish" : "Oddish";
}

console.log(oddishOrEvenish(33));
