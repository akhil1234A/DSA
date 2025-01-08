function mergeSort(arr){

  if(arr.length<=1) return arr; 
  
  let mid = Math.floor(arr.length/2);
  let left = arr.slice(0,mid);
  let right = arr.slice(mid);

  let sortedLeft = mergeSort(left);
  let sortedRight = mergeSort(right);

  return merge(sortedLeft,sortedRight);
}

function merge(left,right){
let result = [];
let i = 0; 
let j = 0; 

while(i<left.length && j<right.length){
  if(left[i]<right[j]){
    result.push(left[i]);
    i++; 
  } else{
    result.push(right[j]);
    j++; 
  }
}

while(i<left.length){
  result.push(left[i]);
  i++; 
}

while(j<right.length){
  result.push(right[j])
  j++; 
}

 return result; 
}

const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(arr));