// Reverse a string

var sentance = "Put my thang down flip it and reverse it";
console.log(sentance.split('').reverse().join(" "));

// Reverse a sentence ("bob likes dogs" -> "dogs likes bob")

var sentance = "Put my thang down flip it and reverse it";
console.log(sentance.split(/\s/).reverse().join(" "));

// Find the minimum value in a list
const nums = [5, 2, 3, 1, 8, 9]
console.log(Math.min(...nums))

// Find the maximum value in a list
const nums2 = [5, 2, 3, 1, 8, 9, 12, 22]
console.log(Math.max(...nums2))

// Calculate a remainder (given a numerator and denominator)

// Return distinct values from a list including duplicates (i.e. "1 3 5 3 7 3 1 1 5" -> "1 3 5 7")

// Return distinct values and their counts (i.e. the list above becomes "1(3) 3(3) 5(2) 7(1)")

// Given a string of expressions (only variables, +, and -) and a set of variable/value pairs (i.e. a=1, b=7, c=3, d=14) return the result of the expression ("a + b+c -d" would be -3).