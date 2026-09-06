// Problem 1: Find Maximum and Minimum in an Array (Without Math.max / Math.min)


// Approach 1
function findMinMax(arr){
  let arr1= arr.sort((a, b) => {return a-b});
  // console.log(arr1)
  for(let i=0; i<= arr1.length; i++){
    if(i==0){
      console.log('minimum', arr1[i])
    }
    else if(i == arr1.length-1){
      console.log('maximum', arr1[i])
    }
    // console.log(i)
    // console.log(arr1.length)
  
  }  

}

findMinMax([10, 4, -99, 1000, 43, 5, 8, 3, 7, 21, 6, -8]);


// Approach 2
function findMinMax2(arr){
  let min= arr[0];
  let max = arr[0];
  for(let i=0; i <= arr.length; i++){
    let val = arr[i]

    if( val > max){
      max = val
    }else if(val < min){
      min = val
    }
    }
  
    // if(arr[i] < arr[i + 1]){
    //   min = arr[i];
    // }
  return {min, max};
}

console.log(findMinMax2([10, 4, -99, 1000, 43, 5, 8, 3, 7, 21, 6, -8]));