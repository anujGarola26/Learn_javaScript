// Problem 1: Reverse a String without Built-in Array.reverse()

function reverseString(str){
  let reverseStr = "";
  if(typeof str !== "string"){
    return "Not a string"
  }
  if(str.length <= 1){
    return "Too small string"
  }

  let arr = [...str];
  for(let i=arr.length-1; i>= 0; i--){
    reverseStr+= arr[i];
  }
  return reverseStr
}
console.log(reverseString('i'));
console.log(reverseString('anuj'));
console.log(reverseString('adam'));
console.log(reverseString([]));
console.log(reverseString({}));
console.log(reverseString(null));