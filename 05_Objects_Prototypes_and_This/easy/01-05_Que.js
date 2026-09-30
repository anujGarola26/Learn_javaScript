// Problem 1: Shallow Clone an Object (Without Object.assign or Spread)

function copyObject(obj) {
  let newObject = {};
  if (typeof obj !== "object") {
    return "Not an object";
  }
  if (obj == null || undefined) {
    return undefined ? "undefined" : "null";
  }
  if (Array.isArray(obj)) {
    return "Array";
  }
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObject[key] = obj[key];
    }
  }
  obj["city"] = "thane";
  // console.log(obj);
  return newObject;
}

console.log(copyObject({ name: "anuj" }));
console.log(copyObject(2));
console.log(copyObject("hello"));
console.log(copyObject(undefined));
console.log(copyObject(null));

// Problem 2: Count the Number of Own Enumerable Properties in an Object

// Approach 1
function countOwnProperties(obj) {
  let arr = [];
  let count = 0;
  if (!Object || typeof obj !== "object" || Array.isArray(obj)) {
    return 0;
  }
  if (obj === null) {
    return null;
  }
  console.log("object");
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      arr.push(obj);
    }
  }
  console.log(arr);
  count = arr.length;
  return count;
}

console.log(countOwnProperties(2));
console.log(countOwnProperties("hello"));
console.log(countOwnProperties(undefined));
console.log(countOwnProperties(null));
console.log(countOwnProperties({}));
console.log(countOwnProperties({ name: "anuj", age: 22, city: "thane" }));

// Approach 2
function countOwnProperties(obj) {
  let count = 0;
  if (!Object || typeof obj !== "object" || Array.isArray(obj)) {
    return 0;
  }
  if (obj === null) {
    return null;
  }
  console.log("object");
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      count++;
    }
  }
  return count;
}

console.log(countOwnProperties(2));
console.log(countOwnProperties("hello"));
console.log(countOwnProperties(undefined));
console.log(countOwnProperties(null));
console.log(countOwnProperties({}));
console.log(countOwnProperties({ name: "anuj", age: 22, city: "thane" }));

// Problem 3: Invert / Flip Object Keys and Values

function invertObject(obj) {
  if (typeof obj !== "object") {
    return "Not an object";
  }
  for (let key in obj) {
    const inverted = {};
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      invertObject[value] = key;
    }
    return invertObject;
  }
}
const inverted = { a: "x", b: "x" };

console.log(invertObject({ age: 25 }));
console.log(invertObject({ a: "apple", b: "banana" }));
console.log(invertObject(inverted));

// Problem 4: Merge Two Objects (Spec Polyfill for Object.assign)

function myAssign(target, source) {
  if (target === null || source === null) {
    return "Empty target or source";
  }
  const newObj = {};
  for (let key in target) {
    if (Object.prototype.hasOwnProperty.call(target, key)) {
      const value = target[key];
      newObj[value] = key;
    }
  }
  for (let key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      const value = source[key];
      newObj[value] = key;
    }
  }
  return newObj
}

console.log(myAssign({ a: 1 }, { b: 2 }))
console.log(myAssign({ a: 1 }, { a: 99 }))
console.log(myAssign({}, { a: 1 }, { b: 2 }))
console.log(myAssign(null, { a: 1 }))