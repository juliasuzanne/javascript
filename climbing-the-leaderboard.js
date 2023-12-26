function climbingLeaderboard(ranked, player) {
  ranked = removeDuplicates(ranked);
  let rankPos = [];
  player.forEach((score) => {
    getScoreIndex(score, ranked, rankPos);
  });

  return rankPos;
}

function getScoreIndex(score, ranked, rankPos) {
  if (ranked.indexOf(score) !== -1) {
    rankPos.push(ranked.indexOf(score) + 1);
  } else if (ranked[ranked.length - 1] > score) {
    rankPos.push(ranked.length + 1);
  } else if (ranked[0] < score) {
    rankPos.push(1);
  } else {
    let low = 0;
    let high = ranked.length;
    let index = getAverage(low, high);
    console.log("LOW: " + low + " HIGH: " + high + " INDEX: " + index);

    rankPos.push(recursiveFunction(ranked, score, low, high, index));
  }
}

function recursiveFunction(array, number, low, high, index, rankPos) {
  // console.log("LOW: " + low + " HIGH: " + high + " INDEX: " + index);

  if (array[index] < number && array[index - 1] > number) {
    // console.log("FOUND 1");
    // console.log(index + 1);
    return index + 1;
  } else if (array[index] > number && array[index + 1] < number) {
    // console.log("FOUND 2");
    // console.log(index + 2);
    return index + 2;
  } else {
    if (number < array[index]) {
      low = index;
      index = getAverage(low, high);
      recursiveFunction(array, number, low, high, index);
    } else if (number > array[index]) {
      high = index;
      index = getAverage(low, high);
      recursiveFunction(array, number, low, high, index);
    }
  }
}

function getAverage(low, high) {
  return Math.floor((high - low) / 2) + low;
}

function removeDuplicates(data) {
  return data.filter((value, index) => data.indexOf(value) === index);
}

console.log(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10, 9, 8, 7, 6], [5, 25, 41, 49, 50, 91, 120]));
