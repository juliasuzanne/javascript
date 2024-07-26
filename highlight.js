function designerPdfViewer(h, word) {
  // Write your code here
  let letterArr = "abcdefghijklmnopqrstuvwxyz".split("");
  // console.log(letterArr);
  let alphabetHash = {};
  alphabetHash.name = "julia";
  for (let i = 0; i < 26; i++) {
    alphabetHash[letterArr[i]] = h[i];
  }
  // console.log(alphabetHash);
  word = word.split("");
  let sumArea = [];
  word.forEach((letter) => {
    // console.log(letter);
    sumArea.push(alphabetHash[letter]);
    sumArea = sumArea.sort((a, b) => b - a);
  });
  return sumArea[0] * word.length;
}

console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], "zaba"));
