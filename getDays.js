/*Create a function that takes two dates and returns the number of days between
 the first and second date. */

function getDays(date1, date2) {
  let timeDate1 = date1.getTime();
  let timeDate2 = date2.getTime();

  let daysDiffernce = (timeDate1 - timeDate2) / (1000 * 3600 * 24);

  return Math.abs(daysDiffernce);
}

console.log(getDays(new Date("June 14, 2019"), new Date("June 20, 2019")));
