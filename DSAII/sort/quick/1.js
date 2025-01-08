function quickSort(arr,low=0,high=arr.length-1){
  if(low<high){
    let partitionIndex = partition(arr,low,high);
    quickSort(arr,low,partitionIndex-1);
    quickSort(arr,partitionIndex+1,high);

  }
}

function partition(arr,low,high){
  let pivotElement = arr[high];
  let i = low - 1; 
  for(let j=low; j<high; j++){
    if(arr[j]<arr[pivotElement]){
      i++;
      [arr[i],arr[j]] = [arr[j],arr[i]];
    }
  }
  i++;
  [arr[i],arr[high]] = [arr[high],arr[i]];
  return i; 
}

const array = [10, 7, 8, 9, 1, 5];
quickSort(array);
console.log("Sorted Array:", array);
