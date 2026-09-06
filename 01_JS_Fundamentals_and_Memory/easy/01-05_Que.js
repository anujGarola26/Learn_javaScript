// Problem 2: Zero-Builtin Shallow Object & Array Cloner ('shallowClone')

// Solution 1 sspecifically for array
function shallowClone(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(shallowClone([2, 3, 4, "anuj", {}]));
