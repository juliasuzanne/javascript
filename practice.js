// // # Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
// // def print_numbers_divisible_by_three
// //   index = 1
// //   while index <= 1000
// //     if index % 3 == 0
// //       puts index
// //     end
// //     index += 1
// //   end
// // end
// // print_numbers_divisible_by_three
// function printNumbersDivisibleByThree() {
//   var index = 1;
//   while (index <= 1000) {
//     if (index % 3 === 0) {
//       console.log(index);
//     }
//     index += 1;
//   }
// }
// printNumbersDivisibleByThree();

// // # Write a method that accepts an array of strings and prints out every other string.
// // def print_every_other_item(strings)
// //   index = 0
// //   strings.each do |string|
// //     if index % 2 == 0
// //       puts string
// //     end
// //     index += 1
// //   end
// // end
// // print_every_other_item(["a", "b", "c", "d", "e"])
// function printEveryOtherItem(strings) {
//   var index = 0;
//   strings.forEach(function (string) {
//     if (index % 2 === 0) {
//       console.log(string);
//     }
//     index += 1;
//   });
// }
// printEveryOtherItem(["a", "b", "c", "d", "e"]);

// // # Write a method that accepts an array of numbers and returns the sum.
// // def compute_sum(numbers)
// //   sum = 0
// //   numbers.each do |number|
// //     sum += number
// //   end
// //   return sum
// // end
// // puts compute_sum([2, 4, 5])
// function computeSum(numbers) {
//   var sum = 0;
//   numbers.forEach(function (number) {
//     sum += number;
//   });
//   return sum;
// }
// console.log(computeSum([2, 4, 5]));

// // # Start with the hash: city_populations = {chi: 2700000}
// // # Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
// // # The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
// // city_populations = {chi: 2700000}
// // city_populations[:nyc] = 8400000
// // city_populations[:sf] = 800000
// // p city_populations
// var cityPopulations = { chi: 2700000 };
// cityPopulations["nyc"] = 8400000;
// cityPopulations.sf = 800000; // same as cityPopulations["sf"]
// console.log(cityPopulations);

// # Write a method that prints out every number from 1 to 100.
function hundred() {
  for (i = 1; i < 101; i++) {
    console.log(i);
  }
}
//hundred();

// # Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).
function everyOther() {
  var count = 1;
  while (count < 100) {
    console.log(count);
    count += 2;
  }
}

//everyOther();

// # Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.

var array = [23, 323, 57, 55, 356, 55, 5, 34, 55, 67, 34, 2, 55];

count = 0;

array.forEach(function (number) {
  if (number === 55) {
    count++;
  }
});

//console.log(count);

// # Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string.
// # For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

var fruits = ["apple", "banana", "oranges", "pears", "cherries"];

var count = 1;

while (count < fruits.length) {
  fruits.splice(count, 0, "awesomesauce");
  count += 2;
}
//console.log(fruits);

// # Start with the hash:
var itemAmounts = { chair: 5, table: 2 };
// # Someone just bought two chairs. Change the hash such that the chair amount is 3.
itemAmounts.chair = 3;
itemAmounts.desk = 7;
// console.log(itemAmounts);
// # The final result should be: {chair: 3, table: 2}
// # Start with the hash: item_amounts = {chair: 5, table: 2}
// # You received 7 desks to sell. Change the hash to include desks.
// # The final result should be: {chair: 5, table: 2, desk: 7}

// # Write a method that accepts a number and returns its factorial.
// # For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
function factorialCreator(num) {
  var arrayNums = [];
  while (num > 0) {
    arrayNums.push(num);
    num--;
  }
  console.log(arrayNums);
  var sum = 1;
  for (i = 0; i < arrayNums.length; i++) {
    sum = sum * arrayNums[i];
  }
  console.log(sum);
}

//factorialCreator(6);

// # Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array.
// # For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].
var array1 = [1, 2, 3];
var array2 = [100, 200, 300];
var newArray = [];
function twoArrays() {
  var i = 0;
  while (i < array1.length) {
    var j = 0;
    while (j < array2.length) {
      newArray.push(array1[i] + array2[j]);
      j++;
    }
    i++;
  }
  console.log(newArray);
}

twoArrays(array1, array2);
