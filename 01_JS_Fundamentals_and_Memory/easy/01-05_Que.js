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

// Shallow clones for every test cases

function shallowClone1(source) {
  if (typeof source !== "object" || source === null) {
    return "Primitive or Null datatypes";
  }
  let isArr = Array.isArray(source);
  let newArr = [];
  if (isArr) {
    for (let i = 0; i < source.length; i++) {
      newArr.push(source[i]);
    }
    return newArr;
  }
  let obj = {};
  for (key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      obj[key] = source[key];
    }
  }
  return obj;
}
console.log(shallowClone1({ name: "Aman", scores: [90, 95] }));
console.log(shallowClone1(95));
console.log(shallowClone1(undefined));
console.log(shallowClone1(null));


// Problem 3: Robust 'NaN' Identifier Polyfill ('isStrictNaN')

function isStrictNaN(val){
  if(val === val){
    return typeof val;
  }else {
    return NaN;
  }
}

console.log(isStrictNaN(23));
console.log(isStrictNaN('hello'));
console.log(isStrictNaN(null));
console.log(isStrictNaN(NaN));


// Problem 4: Falsy Value Stripper without Array Builtins ('filterFalsyValues')


function filterFalsyValues(arr){
  filteredArray = [];
  for(let i=0; i < arr.length ; i++){
    if(arr[i]){
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}

console.log(filterFalsyValues([2,0, 1,NaN, undefined, true, false ]));


// Problem 5: Immutable String Character Swapper ('swapCharAt')

function swapCharAt(str, i, j){
  let newStr = str.split('');
  let res1= newStr[i];
  let res2= newStr[j];
  newStr[i] = res2
  newStr[j] = res1
  return newStr.join('');
}

console.log(swapCharAt('hello', 1, 3));