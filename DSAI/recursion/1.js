//Fibonacci

function fib(n){
  if(n==1) return n;
  if(n==0) return n; 
  return fib(n-1)+fib(n-2);
}
// 0 1 1 2 3

console.log(fib(4));