function fizzBuzz(n) {
  let i = 1;
  while (i < n + 1) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("FizzBuzz");
    } else if (i % 5 !== 0 && i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
    i++;
  }
}

fizzBuzz(15);
