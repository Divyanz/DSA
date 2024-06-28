function towerHanoi(discs) {
  if (discs <= 1) {
    return discs;
  } else {
    return towerHanoi(discs - 1) * 2 + 1;
  }
}
console.log(towerHanoi(4));
