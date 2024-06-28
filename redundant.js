function redundant(str) {
  return function otherFunction() {
    return str;
  };
}

console.log(redundant("divyang")());
