function gridChallenge(grid) {
  //create letter key
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  alphabet = alphabet.split("");
  // console.log(alphabet);
  let alphabetHash = {};
  for (let i = 0; i < 26; i++) {
    alphabetHash[alphabet[i]] = i;
  }

  let convertedArr = [];
  let newArr = [];

  //convert grid into letter keys
  grid.forEach((gridSet) => {
    newArr = [];
    gridSet.forEach((letter) => {
      newArr.push(alphabetHash[letter]);
    });
    convertedArr.push(newArr);
  });

  convertedArr.forEach((row) => row.sort((a, b) => a - b));
  console.log(convertedArr);

  //check each row and column for ascending order, if false return false, if reach end return true

  let numInRow = convertedArr[0].length;
  let numInColumn = convertedArr.length;

  //check columns
  for (let i = 0; i < numInColumn; i++) {
    for (let j = 0; j < numInRow - 1; j++) {
      if (convertedArr[j][i] - convertedArr[j + 1][i] > 0) {
        return "FALSE";
      }
    }
    console.log("check column");
  }

  //check rows
  for (let i = 0; i < numInRow; i++) {
    for (let j = 0; j < numInColumn - 1; j++) {
      if (convertedArr[i][j] - convertedArr[i][j + 1] > 0) {
        return "FALSE";
      }
    }
    console.log("check row");
  }

  //else
  return "TRUE";
}

console.log(
  gridChallenge([
    ["c", "b", "a"],
    ["a", "b", "e"],
    ["a", "f", "g"],
  ])
);
