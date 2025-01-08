//Sort a list of integers and display intermediate steps

function mergeSort(arr){
 if(arr.length<=1) return arr; 

 let mid = Math.floor(arr.length/2);
 let left = arr.slice(0,mid);
 let right = arr.slice(mid)

 
  let sortedLeft = mergeSort(left);
  let sortedRight = mergeSort(right);

  let result =  merge(sortedLeft,sortedRight);
  console.log('passes: ',result)
  return result; 
}

function merge(left,right){
  let result = [];
  let i = 0; 
  let j = 0; 

  while(i<left.length && j<right.length){
    if(left[i]<right[j]){
      result.push(left[i]);
      i++
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
    result.push(right[j]);
    j++; 
  }
  return result;
}

const arr = [5,3,8,6,2,7,4,1];
console.log(mergeSort(arr));