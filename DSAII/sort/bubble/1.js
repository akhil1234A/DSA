//Sort an array of integers in ascending order. 

function bubble(arr){
  let n = arr.length; 
  let swapped; 

  for(let i=0; i<n-1; i++){
    swapped = false; 
    for(let j=0; j<n-1-i; j++){
      if(arr[j]>arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
        swapped = true; 
      }
    }

    if(!swapped) break; 
  }

  return arr; 
}

const arr = [5,2,1,7,8,9];
console.log(bubble(arr));