function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b; // Standard addition
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5));   // Output: 10

//The unexpected behavior occurs when using the loose equality operator (==) instead of strict equality (===).

function fooLoose(a,b){
  if(a == null || b == null){
    return 0;
  }
  return a + b;
}

console.log(fooLoose(0,5)); //Output: 5
console.log(fooLoose(5,0)); //Output: 5
console.log(fooLoose(0,0)); //Output: 0
console.log(fooLoose(null,5)); //Output: 0
console.log(fooLoose(5,null)); //Output: 0