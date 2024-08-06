//'abcdddefghi'

const getLongestSubstring = (testString) => {
  let prevString = [];
  let longestString = [];
  let prevRecord = 0;
  let currentRecord = 0;
  for (let i = 0; i < testString.length; i++) {
    if (testString[i] === testString[i + 1]) {
      if (currentRecord > prevRecord) {
        prevRecord = currentRecord;
        prevString = longestString;
      } else {
        currentRecord = 0;
        longestString = [];
      }
    } else {
      longestString.push(testString[i + 1]);
      currentRecord++;
    }
  }
  return longestString.join("");
};

console.log(getLongestSubstring("abcdddefghi"));
