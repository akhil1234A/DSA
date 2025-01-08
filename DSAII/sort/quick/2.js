// Count Recursive Calls

let quickCount = 0; 
let partitionCall = 0;

function quickSort(arr,low=0,high=arr.length-1){
  quickCount++;
  if(low<high){ 
    partitionCall++; 
    let partitionIndex = partition(arr,low,high);
    quickSort(arr,low,partitionIndex-1);
    quickSort(arr,partitionIndex+1,high);
  }
}

function partition(arr,low,high){
  let pivotElement = arr[high];
  let i = low-1; 
  for(let j=low; j<high; j++){
    if(arr[j]<arr[high]){
      i++;
      [arr[i],arr[j]] = [arr[j],arr[i]];
    }
  }
  i++; 
  [arr[i],arr[high]] = [arr[high],arr[i]]
  return i; 
}

const array = [3,4,1,7,8,2];
quickSort(array);
console.log(array);
console.log(quickCount);
console.log(partitionCall);