function climbingLeaderboard(ranked, player) {
  ranked = removeDuplicates(ranked);
  console.log(ranked);
  let rankPos = [];
  player.forEach((score) => {
    rankPos.push(getScoreIndex(score, ranked));
  });

  return rankPos;
}

function getScoreIndex(score, ranked) {
  for (let i = 0; i < ranked.length; i++) {
    if (ranked[i] <= score) {
      console.log(score);
      return i + 1;
    } else if (ranked[i] > score && i === ranked.length - 1) {
      console.log(score);
      return ranked.length + 1;
    }
  }
}
function removeDuplicates(data) {
  return data.filter((value, index) => data.indexOf(value) === index);
}

console.log(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]));
