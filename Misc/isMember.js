  
// Write a function called isMember that takes an array of words and a string as arguments. isMember should return true if the string is a word in the array, and false if it is not.

// The function is expected to return a BOOLEAN.
// The function accepts the following parameters:
// -- 1. Array of strings
// -- 2. String

// function isMember(arr, str) {
// 	if (arr.includes(str)) {
//         return true
//     } else {
//         return false
//     }
// }

function isMember(arr, str) {
    for (let i = 0; i < arr.length; i++) {
        let isInArray = true;
        for (let j = 0; j < arr[i].length; j++) {
            if (str.charAt(j) === "*") {
                continue;
            }
            if (arr[i].charAt(j) !== str.charAt(j)) {
                isInArray = false
            }
        }
        if (isInArray) return true
    }
    return false
}

const words = ['bing', 'bang', 'boom'];
console.log(isMember(words, 'bing')); // true   (because 'bing' exists in the list of words)
console.log(isMember(words, 'hello')); // false  (because 'hello' does NOT exists in the list of words)

// Bonus
// A query may contain the wildcard character "*" which can match with any character. If you're familiar with card games, think of the "*" as the Joker card which is also a wildcard and can represent any card in the deck.

console.log(isMember(words, 'ba*g')); // true  (because the "*" matches the "n" in bang)
console.log(isMember(words, '**')); // false (no two letter words)

console.log(isMember(words, '*oom')); // Is this true or false?
console.log(isMember(words, 'bam')); //should be false
console.log(isMember(words, '**ng')); //should be true
console.log(isMember(words, 'b**m')); //should be true
console.log(isMember(words, '*oo*')); //should be true