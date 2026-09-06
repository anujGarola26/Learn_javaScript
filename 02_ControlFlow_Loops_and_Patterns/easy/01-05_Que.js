// Problem 1: FizzBuzz Enterprise Engine ('fizzBuzz')

// Solution 1 without Modulo operator
function fizzBuzz(num){

  let arr3 =[];
  let arr5= [];
  let intersection;
  for(let i=1; i <= num; i++){

    for(let j=1; j <= num; j++){
      if(i == 3*j ) {
        arr3.push(i);
      }
      if(i == 5*j){
        arr5.push(i)
      }
    }
  }
  intersection = arr3.filter(item => {return arr5.includes(item)});
  let newArr3 = arr3.filter(item => {
    if(arr5.includes(item)){
      arr5.pop(item);
      arr3.pop(item);
    }
  });
  let newArr = [...arr3, ...arr5, ...intersection];
  console.log(newArr);
  let newArr1 = [];
  for(let i=0; i<= num; i++){
    
    if(arr3.includes(i)) {
      newArr1.push('fizz');
    }
    else if(arr5.includes(i)) {
      newArr1.push('buzz')
    }
    else if(intersection.includes(i)){
      newArr1.push('fizzbuzz')
    }else {
      newArr1.push(i)
    }
  }
  console.log(newArr1);
}

fizzBuzz(15);