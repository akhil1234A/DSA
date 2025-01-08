//Find the kth smallest element using Selection Sort.

const arr = [12,24,35,45,57];

function kth(arr,k){

  for(let i=0; i<k; i++){
    let minIndex = i; 
    for(let j=i+1; j<arr.length; j++){
      if(arr[j]<arr[minIndex]){
        minIndex = j; 
      }
    }
    if(i!=minIndex){
      [arr[i],arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }
  
  return arr[k-1]; 
}

console.log(kth(arr,5));