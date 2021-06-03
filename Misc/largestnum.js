// Write a function called largestNumber that takes a positive or zero integer argument magnitude and returns the largest integer possible with a number of digits equal to magnitude. If magnitude is zero, return 0.

// Example:

// largestNumber(0);  // return 0
// largestNumber(1);  // return 9
// largestNumber(3);  // return 999
// largestNumber(4);  // return 9999
// largestNumber(8);  // return 99999999

// Hungry for more:
// Modify your function, so magnitude can be negative. If magnitude is negative, 
// return the largest possible number with that many digits after a decimal point.

function largestNumber(num) {
    const nine = "9";
    if (num === 0) {
        console.log("0")
    } else if (num < 0) {
        console.log("." + nine.repeat(Math.abs(num)));
    } else {
        console.log(nine.repeat(num));
    };
};

largestNumber(5);
largestNumber(3);
largestNumber(0);
largestNumber(-5);