# 2) Write a function that takes in an array of strings and returns the smallest string.
array = ["string1", "sasdr", "asda", "asl a tjos os a j"]

# iterate through each string in array
# find length of each string
# somehow compare lengths
# another array? if statements? save a variable with the smallest string and override it if we find a smaller one?
# use a hash to save lengths of each string?

def smallest(array)
  small = array[0]
  array.each do |n|
    if n.length < small.length
      small = n
    end
  end
  return small
end

p smallest(array)

# // 3) Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.
# // 4) Write a function that takes in an array of words and returns the number of words that begin with the letter “a”.
# // 5) Write a function that takes in an array of strings and joins them together to make a single string separated by commas.
# // 6) Write a function that takes in an array of numbers and returns the product of all the numbers (each number multiplied by each other).
# // 7) Write a function that takes in an array of numbers and returns the two smallest numbers.
# // 8) Write a function that takes in an array of numbers and returns a count of how many zeros are in the array.
# // 9) Write a function that takes in an array of numbers and returns true if all the numbers are bigger than 10, otherwise returns false.
# // 10) Write a function that takes in an array of words and returns the number of times the letter “a” appeared in total.
# // BONUS PROBLEMS
# // Write a function that accepts a string and returns whether it’s a palindrome.
# // Write a function to generate/print/store the first "n" prime numbers.
# // Given a tic-tac-toe board (matrix of 3 x 3), write a function that can check to see whether X or O won.
