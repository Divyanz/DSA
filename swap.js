function swap(a, b) {
  var c;
  c = a;
  a = b;
  b = c;
  return [a, b];
}

console.log(swap(34, 45));
