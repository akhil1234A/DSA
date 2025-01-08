//Sort String Alphabetically
const str = 'akhilanwer';
const arr = str.split('');

let swapped; 
for(let i=0; i<arr.length-1; i++){
  swapped = false; 
  for(let j=0; j<arr.length-i-1; j++){
     if(arr[j]>arr[j+1]){
      [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
      swapped = true; 
     }
  }
  if(!swapped) break; 
}

console.log(arr);