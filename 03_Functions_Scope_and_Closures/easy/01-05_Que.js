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



// Problem 2: Greeter & Prefix Generator (Higher-Order Function with Parameter Closure)



function createPrefixer(prefix = 'LOG'){
  const newPrefix = prefix="LOG"? 'LOG':String(prefix).toLocaleUpperCase().trim();
  return function(message){
    if(!message){
      return 'No message';
    }
    return (`${prefix}: ${message}`);
  }
}

let log = createPrefixer();
console.log(log());
console.log(log('Hello i am anuj'));

let error = createPrefixer('error');
console.log(error());
console.log(error('error agya guyzz!!'));