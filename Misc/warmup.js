//Function Takes in Array
function differenceInAges(ages){
    let newArray = [];
  //Find Oldest Push to New Array
    newArray.push(Math.max(...ages))
  //Find Youngest Push to New Array
    newArray.push(Math.min(...ages))
  //Find Difference Push to New Array
    newArray.push(newArray[0] - newArray[1])
    console.log(newArray)
  }
  differenceInAges([82, 15, 6, 38, 35])