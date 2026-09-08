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


// Problem 2: Valid Palindrome Verification (Ignoring Non-Alphanumeric Characters)


function isPalindrome(str1){
  if(typeof str1 !== "string"){
    return "Not a string"
  }
  if(str1.length <= 1){
    return "Too small string"
  }
  let str = str1.replaceAll(" ", "").toLowerCase();
  let newStr = str.split('').reverse().join("");
  if(str !== newStr){
    return false
  }

  return true
}

console.log(isPalindrome('anuj'));
console.log(isPalindrome({}));
console.log(isPalindrome(['anuj']));
console.log(isPalindrome(null));
console.log(isPalindrome(2324));
console.log(isPalindrome('laal'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome('A man, a plan, a canal'));