arr = [7, 3, 5, 4, 5, 3, 4]

arr = arr.sort().filter((item,i) => !(arr[i] == arr[i+1] || arr[i-1]==arr[i]));

console.log(arr)