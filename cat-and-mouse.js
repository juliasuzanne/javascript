function catAndMouse(x, y, z) {
  let catA = 0;
  let catB = 0;
  catA = Math.abs(x - z);
  catB = Math.abs(y - z);
  if (catA < catB) {
    return "Cat A";
  } else if (catA > catB) {
    return "Cat B";
  } else {
    return "Mouse C";
  }
}

console.log(catAndMouse(2, 6, 5));
