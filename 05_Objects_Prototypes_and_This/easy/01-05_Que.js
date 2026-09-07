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
console.log(copyObject(2))
console.log(copyObject('hello'))
console.log(copyObject(undefined))
console.log(copyObject(null))