//Factorial
// function Factorial(n){
//   if(n==1) return n; 
//   return n*Factorial(n-1);
// }

// console.log(Factorial(4))

//Fibonnaci
// 0 1 1 2 3 
// function fib(n){
//   if(n==1) return 1; 
//   if(n==0) return 0; 
//   return fib(n-1)+fib(n-2)
// }
// console.log(fib(5));

//Largest Number in an Array
// const arr = [1,2,3,4,5];

// function large(arr,n){
//   if(n==1) return arr[n-1];
//   return Math.max(arr[n-1], large(arr,n-1));
// }

// console.log(large(arr,arr.length));

//Second Largest Number in an Array
// const arr = [1,3,4,2,5];
// function secondLarge(arr,n, largest=-Infinity, smallest=-Infinity){
//   if(n==0) return smallest;
//   let current = arr[n-1];
//   if(current>largest){
//     smallest = largest;
//     largest = current;
//   } else if(current>smallest){
//     smallest = current;
//   }
//   return secondLarge(arr,n-1,largest,smallest); 
// }
// console.log(secondLarge(arr,arr.length))


//reverse a string

let str='english';
// console.log(str.substr(1));
function reverse(str){
  if(str=='') return ''
  return reverse(str.substr(1))+str[0]
}
console.log(reverse(str));