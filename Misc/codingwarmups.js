//Make a function that that squares each number passed into it from an array, and sums the results.

const arr = [1, 2, 2] 

function sumOfSquares(arr){
    let squaresum = 0
    for (let i = 0; i < arr.length; i++) {
        squaresum += arr[i] ** 2
    }
    return squaresum
}
sumOfSquares(arr); //should return 9, because 1^2 + 2^2 + 2^2 = 9.

//////

//Make a function that takes one argument, a two dimensional array, where all the arrays are the same length, and returns the greatest sum of the numbers by row, column and diagonal.
const array = [ [10, 20, 30],
            [40, 50, 60],
            [70, -80, 90] ];

function loopTheLoop(array){
    let row = 0
    let test = 0
    for (let i = 0; i < array.length; i++) {
        for (j = 0; j < array[0].length; j++) {
            test = test + array[i][j]
        }
        if (test > row) {
            row = test
        }
        test = 0
    }
    console.log(row)
    let column = 0
    for (let i = 0; i < array[0].length; i++) {
        for (j = 0; j < array.length; j++) {
            test = test + array [j][i]
        }
        if (test > column) {
            column = test
        }
        test = 0
    }
    console.log(column)
    let diagonal = 0
    let testone = 0
    let testtwo = 0
    for (let i = 0; i < array.length; i++) {
        testone = testone + array[i][i]
        testtwo = testtwo + array[i][array.length - i - 1]
        if (testone > testtwo) {
            diagonal = testone
        } else {
            diagonal = testtwo
        }
    }
    console.log(diagonal)
}

loopTheLoop(array); //180

const bigArray =
[ [ 887, -541, -430, -590, 117, 172, -319, -18 ],
  [ -269, 964, 209, 840, -456, 156, 365, -568 ],
  [ 289, -41, 488, 198, 240, 124, -427, 214 ],
  [ 452, 894, 968, -149, 683, 977, 741, -805 ],
  [ 181, -714, -950, 107, 800, 751, -143, 380 ],
  [ 152, 493, 707, 914, 37, 356, -625, 608 ],
  [ -345, 906, 83, 676, 723, 381, 557, -183 ],
  [ 199, -943, -710, 565, 193, 315, 281, 245 ] ];

  loopTheLoop(bigArray)