/*A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can 
be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being
 different. For example [3,0,3] [1,5,1] */

function countBoomerangs(arr) {
  let count = 0;
  for (i = 0; i <= arr.length; i++) {
    if (arr[i] == arr[i + 2]) {
      if (arr[i] != arr[i + 1]) {
        count = count + 1;
      }
    }
  }

  return count;
}
console.log(countBoomerangs([2, 3, 2, 3, 5, 6, 7, 8, 7]));
