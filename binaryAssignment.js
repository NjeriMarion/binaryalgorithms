//merge sort
function mergeSort1(arr) {
    if (arr.length < 2) {
      return arr
    }
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)
    return merge1(mergeSort1(leftArr), mergeSort1(rightArr))
  }
  function merge1(leftArr, rightArr) {
    const sortedArr = []
    while (leftArr.length && rightArr.length) {
      if (leftArr[0] <= rightArr[0]) {
        sortedArr.push(leftArr.shift())
      } else {
        sortedArr.push(rightArr.shift())
      }
    }
    const resultArr1 = [...sortedArr, ...leftArr, ...rightArr]
    return resultArr1
  }
  
  const num =  [45,12,6,89,2,5]
  let target1 = 6
  let sortedArr1 = mergeSort1(num)
  console.log(sortedArr1)
  
  // binary search algorithm
  function binary (num, target){
      let left = 0
      let right  = num.length -1 ;
      while(left <= right){
          let middle = Math.floor( (left + right)/2);
          if(num[middle]=== target){
              return middle;
          }
          else if(num[middle] < target){
              left = middle+1;
  
          }
          else {
              right = middle -1;
          }
  
      }
      return null
  }
    console.log(binary(sortedArr1, target1))


//second Array using binary search
// let arr2 = [1,4,78,2,67,3];
// num.sort(function(a,b){
//     return a - b
// })
// let target2 = 34;
// console.log(arr2)
// console.log(binary(arr2, target2))

// sorting in descending order
// let arr = [123,89,5,23,9,56];
// arr.sort(function(a,b){
//     return b - a
// })
// console.log(arr)

// question2

//merge sort
function mergeSort1(arr) {
    if (arr.length < 2) {
      return arr
    }
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)
    return merge1(mergeSort1(leftArr), mergeSort1(rightArr))
  }
  function merge1(leftArr, rightArr) {
    const sortedArr = []
    while (leftArr.length && rightArr.length) {
      if (leftArr[0] <= rightArr[0]) {
        sortedArr.push(leftArr.shift())
      } else {
        sortedArr.push(rightArr.shift())
      }
    }
    const resultArr1 = [...sortedArr, ...leftArr, ...rightArr]
    return resultArr1
  }
  
  const arr2 =  [1,4,78,2,67,3]
  let sortedArr2 = mergeSort1(arr2)
  console.log(sortedArr2)
  
  // binary search algorithm
  function binary (num, target){
      let left = 0
      let right  = num.length -1 ;
      while(left <= right){
          let middle = Math.floor( (left + right)/2);
          if(num[middle]=== target){
              return middle;
          }
          else if(num[middle] < target){
              left = middle+1;
  
          }
          else {
              right = middle -1;
          }
  
      }
      return null
  }

//merge sort = sorting in descending order
function mergeSort1(arr) {
    if (arr.length < 2) {
      return arr
    }
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)
    return merge1(mergeSort1(leftArr), mergeSort1(rightArr))
  }
  function merge1(leftArr, rightArr) {
    const sortedArr = []
    while (leftArr.length && rightArr.length) {
      if (leftArr[0] <= rightArr[0]) {
        sortedArr.push(leftArr.shift())
      } else {
        sortedArr.push(rightArr.shift())
      }
    }
    const resultArr1 = [...sortedArr, ...leftArr, ...rightArr]
    return resultArr1
  }
  
  let arr3 = [123,89,5,23,9,56];
  let sortedArr3 = mergeSort1(arr3)
  console.log((sortedArr3. reverse()))