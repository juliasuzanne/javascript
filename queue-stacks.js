function processData(input) {
  let arr = input.split(/\r?\n|\r|\n/g);
  arr.shift();
  let newArr = [];
  arr.forEach((q) => {
    q = q.trim().split("");
    if (q[0] === "1") {
      newArr.push(q.slice(2, q.length));
    } else if (q[0] === "2") {
      newArr.shift();
    } else if (q[0] === "3") {
      console.log(newArr.toString().slice(0, 3).replace(",", ""));
    }
  });
}

console.log(processData("10 \n 1 42 \n 2 \n 1 14 \n 3 \n 1 28 \n 3 \n 1 60 \n 1 78 \n 2 \n 2"));
