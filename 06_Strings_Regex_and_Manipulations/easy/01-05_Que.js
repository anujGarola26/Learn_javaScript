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


// Problem 3: Count Vowels and Consonants in a String


function countVowelsAndConsonants(str) {
  if (typeof str !== "string") {
    return "Not a valid string";
  }

  const strObject = { Vowels: 0, Consonants: 0 };
  const VOWELS = "aeiou";
  const cleanStr = str.toLowerCase();

  for (let i = 0; i < cleanStr.length; i++) {
    const char = cleanStr[i];

    if (char >= "a" && char <= "z") {
      if (VOWELS.includes(char)) {
        strObject.Vowels++;
      } else {
        strObject.Consonants++;
      }
    }
  }

  return strObject;
}

console.log(countVowelsAndConsonants("Hello World 123!"));
// Output: { Vowels: 3, Consonants: 7 }

console.log(countVowelsAndConsonants([]));
console.log(countVowelsAndConsonants(""));
console.log(countVowelsAndConsonants("hello"));
console.log(countVowelsAndConsonants(null));
console.log(countVowelsAndConsonants(undefined));
console.log(countVowelsAndConsonants(' anuj '));



// Problem 4: Find the First Non-Repeating Character in a String

// Approach 1
function firstUniqChar(str){
  if (typeof str !== "string") {
    return "Not a valid string";
  }
  let result = str.replaceAll(" ", "");
  let newStr = result.toLowerCase().split('');
  for (let i = 0; i < newStr.length; i++) {
    if(newStr[i] != newStr[i+1] && newStr[i-1] != newStr[i]){
      return i;
    }
  }
  return "Not found"
}

console.log(firstUniqChar(" a n U J"));
console.log(firstUniqChar(" sbfggh"));
console.log(firstUniqChar(" aanuj"));
console.log(firstUniqChar(" leetcode"));
console.log(firstUniqChar(" loveleetcode"));
console.log(firstUniqChar(" aabb"));

// Approach 2
function firstUniqChar1(s) {
  let charCount = {};
  
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  for (let i = 0; i < s.length; i++) {
    if (charCount[s[i]] === 1) {
      return i;
    }
  }
  
  return -1;
}

console.log(firstUniqChar1("leetcode")); 
console.log(firstUniqChar1("loveleetcode")); 
console.log(firstUniqChar1("aabb"));