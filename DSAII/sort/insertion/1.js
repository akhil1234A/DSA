//Sort an array of floating-point numbers.
const arr = [3.14, 7.62, 0.001, 102.56, 8.007, -2.718, -0.045, -123.45, -0.6789, -9.81];

for(let i=1; i<arr.length; i++){
  let temp = arr[i];
  let j = i- 1;
  while(j>=0 && arr[j]>temp){
      arr[j+1] = arr[j];
    j--;
  }
  arr[j+1] = temp; 
}

console.log(arr);