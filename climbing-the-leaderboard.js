function climbingLeaderboard(ranked, player) {
  ranked = removeDuplicates(ranked);
  let rankPos = [];
  player.forEach((score) => {
    rankPos.push(getScoreIndex(score, ranked));
  });

  return rankPos;
}

function getScoreIndex(score, ranked) {
  let newRanked = ranked;
  if (ranked.indexOf(score) !== -1) {
    return ranked.indexOf(score) + 1;
  } else if (ranked[ranked.length - 1] > score) {
    return ranked.length + 1;
  } else if (ranked[0] < score) {
    return 1;
  } else {
    let low = 0;
    let high = ranked.length;
    let currentIndex = getNewIndex(low, high);
    console.log("Call recursive search on: " + score);
    return recursiveSearchForIndex(currentIndex, ranked, score, low, high);
  }
}

function recursiveSearchForIndex(currentIndex, ranked, score, low, high) {
  if (high - low === 1) {
    return 100;
  }
  if (ranked[currentIndex] > score) {
    if (ranked[currentIndex + 1] < score) {
      return currentIndex + 1;
    } else {
      return 100;
    }
  } else if (ranked[currentIndex] < score) {
    if (ranked[currentIndex - 1] > score) {
      return currentIndex;
    } else {
      low = currentIndex;
      currentIndex = getNewIndex(low, high);
      return 500;
    }
  }
}

function getNewIndex(low, high) {
  let num = high - low;
  console.log("NUM: " + num);
  console.log("NEWINDEX: " + Math.floor(num / 2));
  return Math.floor(num / 2);
}

function removeDuplicates(data) {
  return data.filter((value, index) => data.indexOf(value) === index);
}

console.log(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10, 9, 8, 7, 6], [5, 25, 41, 49, 50, 91, 120]));
