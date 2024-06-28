/**In a board game, a piece may advance 1-6 tiles forward depending on the number rolled
 on a six-sided die. If you advance your piece onto the same tile as another player's
piece, both of you earn a bonus.

Can you reach your friend's tile number in the next roll? Create a function that takes
 your position a and your friend's position b and returns a boolean representation of
  whether it's possible to earn a bonus on any die roll. */

function possibleBonus(a, b) {
  if (b - a <= 6) {
    if (b - a <= 0) {
      return false;
    } else if (a == b) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}

console.log(possibleBonus(2, 7));
