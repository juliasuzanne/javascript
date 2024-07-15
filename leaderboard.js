function climbingLeaderboard(ranked, player) {
  ranked = [...new Set(ranked)];
  ranked.sort((a, b) => b - a); //descending
  let n = ranked.length;
  let results = [];
  for (let score of player) {
    while (n > 0 && ranked[n - 1] <= score) {
      n = n - 1;
    }
    results.push(n + 1);
  }

  return results;
}
