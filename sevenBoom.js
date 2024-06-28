/*Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array.
 Otherwise, return "there is no 7 in the array". */

function sevenBoom(arr) {
  let arrString = arr.join("").toString();

  if (arrString.includes("7")) {
    return "Boom!";
  } else {
    return "there is no 7 digit in the array";
  }
}
console.log(sevenBoom[(22, 23, 2, 26, 27)]);
