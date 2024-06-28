/**Create a function that takes a string (a random name).
If the last character of the name is an "n", return true, otherwise return false. */

function isLastCharacterN(word) {
  let lastCharacter = /n\b/;
  return (
    word.search(lastCharacter) > -1
    /**this is an 'if' statement that checks if the 
  value returning is greather than -1. */
  );
}
console.log(isLastCharacterN("aden"));
