const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8];

function merge(left,right){
  let result = [];
  let i = 0; 
  let j = 0; 

  while(i<left.length && j<right.length){
    if(left[i]<right[j]){
      result.push(left[i]);
      i++; 
    } else {
      result.push(right[j]);
      j++; 
    }
  }

  while(i<left.length){
    result.push(left[i]);
    i++; 
  }

  while(j<right.length){
    result.push(right[j]);
    j++
  }

  return result;
}

console.log(merge(array1,array2))