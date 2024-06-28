/* In this challenge, you must verify the equality of two different values given 
the parameters a and b.

Both the value and type of the parameters need to be equal. 
*/

function checkEquality(a, b) {
  if (typeof a == typeof b) {
    if (a == b) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

console.log(checkEquality(5, "5"));
