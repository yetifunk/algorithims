const numbers = [ 3, 44, 42, 54, 95, 2, 79, 23, 3, 92, 14, 35 ]

const insertionSort = (items) => {
  for (let i = 1; i < numbers.length; i++) {
    let j = i - 1
    let temp = numbers[i]
    while (j >= 0 && numbers[j] > temp) {
      numbers[j + 1] = numbers[j]
      j--
    }
    numbers[j + 1] = temp
  }
  return items;
};

console.log(insertionSort(numbers));
