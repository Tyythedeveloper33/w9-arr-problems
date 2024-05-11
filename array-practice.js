//Time complexity: 0(n); Space complexity: 0(1)
const findMinimum = arr => {
  let acc = Infinity
  if(arr.length === 0) return undefined
  for(let i = 0; i < arr.length; i++) {
    if(acc > arr[i]) {
      acc = arr[i]
    }
  }
  console.log(acc)
  return acc
};

//Time complexity 0(n); Space complexity 0(n)
const runningSum = arr => {
  let res = []
  let curVal = 0
  for(let i = 0; i < arr.length; i++) {
    curVal += arr[i]
    res.push(curVal)
  }
  return res
};

//Time complexity 0(n); Space complexity 0(n)
const evenNumOfChars = arr => {
  let res = arr.filter((word) => {
    return word.length % 2 === 0});
  return res.length;
};

//Time complexity 0(n^2); Space complexity 0(n)
const smallerThanCurr = arr => { 
  let res = []
  let count = 0;
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      if(arr[i] > arr[j]) count++
    }
    res.push(count)
    count = 0
  }
  return res
};

//Time complexity 0(n^2); Space complexity 0(1)
const twoSum = (arr, target) => {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      if(arr[i] + arr[j] === target) return true;
    }
  }
  return false
};

//Time complexity 0(n); Space complexity 0(1)
const secondLargest = arr => {
  let closure = (a, b) => {
    return a - b;
  }
  let sorted = arr.sort(closure);
  return sorted[arr.length - 2]
};

//Time complexity 0(n); Space complexity 0(n)
const shuffle = (arr) => {
  let k = Math.floor(Math.random() * (arr.length))
  let newArr = [...arr]
  for(let i = 0; i < newArr.length; i++) {
    [newArr[i], newArr[k]] = [newArr[k], newArr[i]]
  }
  return newArr
};





module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
