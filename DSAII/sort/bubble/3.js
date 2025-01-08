//Count the number of swaps required to sort an array.
const arr = [5,2,1,9,7,6,3]
let count = 0; 
let swapped;

for(let i=0; i<arr.length-1; i++){
  swapped = false; 
  for(let j=0; j<arr.length-1-i; j++){
    if(arr[j]>arr[j+1]){
      [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
      swapped = true; 
      count++; 
    }
  }
  if(!swapped) break; 
}

console.log(arr);
console.log(count);