/*Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you
 passed to the function. For example, if the input is 4 then your function should return 10 because 
 1 + 2 + 3 + 4 = 10.*/

function addUp(num) {
  let ans = 0;
  for (i = 0; i <= num; i++) {
    ans += i;
  }
  return ans;
}

console.log(addUp(4));
