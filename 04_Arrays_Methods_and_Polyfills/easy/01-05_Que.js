// Problem 1: Find Maximum and Minimum in an Array (Without Math.max / Math.min)

// Approach 1
function findMinMax(arr) {
  let arr1 = arr.sort((a, b) => {
    return a - b;
  });
  // console.log(arr1)
  for (let i = 0; i <= arr1.length; i++) {
    if (i == 0) {
      console.log("minimum", arr1[i]);
    } else if (i == arr1.length - 1) {
      console.log("maximum", arr1[i]);
    }
    // console.log(i)
    // console.log(arr1.length)
  }
}

findMinMax([10, 4, -99, 1000, 43, 5, 8, 3, 7, 21, 6, -8]);

// Approach 2
function findMinMax2(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i <= arr.length; i++) {
    let val = arr[i];

    if (val > max) {
      max = val;
    } else if (val < min) {
      min = val;
    }
  }

  // if(arr[i] < arr[i + 1]){
  //   min = arr[i];
  // }
  return { min, max };
}

console.log(findMinMax2([10, 4, -99, 1000, 43, 5, 8, 3, 7, 21, 6, -8]));

// Problem 2: Reverse an Array In-Place (Two-Pointer Technique)

// Approach 1
function reverseArray(arr) {
  let reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
}

console.log(reverseArray([3, 5, 8, 3, 7, 21, 6, 10]));
console.log(reverseArray(["a", "b", "c", "d"]));

// Problem 3: Check if Array is Sorted in Non-Decreasing Order

function isSorted(arr) {
  if (typeof arr !== "object") {
    return false;
  }
  if (!Array.isArray(arr)) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[0];
    if (arr[i] > arr[i + 1]) {
      return false;
    } else {
      return true;
    }
  }

  return arr;
}

console.log(isSorted(undefined));
console.log(isSorted(null));
console.log(isSorted(true));
console.log(isSorted("true"));
console.log(isSorted([2, 3]));
console.log(isSorted([5, 3, 4, 7, 1]));
console.log(isSorted([1, 3, 4, 7]));

// Problem 4: Remove Duplicates from a Sorted Array In-Place (Two-Pointer Runner)

function removeDuplicates(arr) {
  if (typeof arr !== "object") {
    return "Not an array";
  }
  if (!Array.isArray(arr)) {
    return "Not an array";
  }
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] != arr[i+1]){
      count++
    }
  }
  return count
}

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([1, 2, 3]));
console.log(removeDuplicates([5]));
