# Write a function that takes in an array of numbers and returns its sum.

# array = [1, 2, 3, 4]
# array2 = [0, -1, -9, -10]

# add each number consecutively and track where I am and how long the array is 

# i = 1
# sum = array[0]

# while(i < array.length)     # i = 4 < 4
#   sum = sum + array[i]    # sum = 6 + 4 (10)
#   i += 1                  # i = 4
# end

# print sum


# Write a function that takes in an array of words and returns the number of words that begin with the letter “a”.

input: ["apple", "orange", "apparatus", "angry", "plushie", "tortilla"]
output: 3

input: ["APPLE", "orange", "appAratus", "angry", "ALL", "plushie", "tortilla"]
output: 4

input: ["a", "orange", "apparatus", "plushie", 1, 13]
output: 2

check each word to see if it starts with an A or an "a" (check for either condition)
  loop through each with a while statement using the length of the array and a counting variable like index
use a conditional to add an integer to a counting variable if it does
return the counting variable of a letter words to the terminal





