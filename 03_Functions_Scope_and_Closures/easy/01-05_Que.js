// Problem 1: Custom Counter Factory with Encapsulated State (`createCounter`)

function createCounter(initial=0){
  let current = initial;
  return {
    increment(){
      if(current >=50) return "Limit exceeed";
      current++
      return current;
    },
    decrement(){
      if(current <= 0) return "Limit reached";
      current--;
      return current;
    },
    reset(){
      current = initial;
      return current;
    }
  }

}

let counter = createCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.reset());