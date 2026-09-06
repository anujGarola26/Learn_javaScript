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
