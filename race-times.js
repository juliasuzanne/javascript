function raceTimes(num, arr) {
  let hashMap = {};
  let hashMapTimes = {};
  arr.forEach((el, i) => {
    arr[i] = parseInt(el.split(":").join(""));
    hashMap[arr[i]] = i;
    hashMapTimes[arr[i]] = el;
    console.log(el);
  });
  arr.sort((a, b) => a - b);
  console.log(hashMap[arr[0]]);
  console.log(hashMapTimes[arr[0]]);
  console.log(`The winner was runner #${hashMap[arr[0]]} with a time of ${hashMapTimes[arr[0]]}!`);
}

raceTimes(3, ["09:10:40", "09:00:40", "19:00:40"]);
