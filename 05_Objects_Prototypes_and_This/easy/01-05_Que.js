// Problem 1: Shallow Clone an Object (Without Object.assign or Spread)

function copyObject(obj){
  let newObject = {}
  if(typeof(obj) !== 'object'){
    return "Not an object"
  }
  if(obj == null || undefined){
    return (undefined?'undefined':'null')
  }
  if(Array.isArray(obj)){
    return "Array"
  }
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
       newObject[key] = obj[key];
    }
  }
  obj['city']= 'thane';
  // console.log(obj);
  return newObject;

}

console.log(copyObject({"name": 'anuj'}));
console.log(copyObject(2));
console.log(copyObject('hello'));
console.log(copyObject(undefined));
console.log(copyObject(null));



// Problem 2: Count the Number of Own Enumerable Properties in an Object

// Approach 1
function countOwnProperties(obj){
  let arr = [];
  let count=0;
  if(!Object || typeof obj !== 'object' || Array.isArray(obj)){
    return 0;
  }
  if(obj === null){
    return null;
  }
  console.log('object');
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      arr.push(obj)
    }
  }
  console.log(arr)
  count = arr.length;
  return count;
}

console.log(countOwnProperties(2));
console.log(countOwnProperties('hello'));
console.log(countOwnProperties(undefined));
console.log(countOwnProperties(null));
console.log(countOwnProperties({}));
console.log(countOwnProperties({"name": 'anuj', 'age': 22, 'city': 'thane'}));



// Approach 2
function countOwnProperties(obj){
  let count=0;
  if(!Object || typeof obj !== 'object' || Array.isArray(obj)){
    return 0;
  }
  if(obj === null){
    return null;
  }
  console.log('object');
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      count++
    }
  }
  return count;
}

console.log(countOwnProperties(2));
console.log(countOwnProperties('hello'));
console.log(countOwnProperties(undefined));
console.log(countOwnProperties(null));
console.log(countOwnProperties({}));
console.log(countOwnProperties({"name": 'anuj', 'age': 22, 'city': 'thane'}));