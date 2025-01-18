//Binary Search Recurion
const arr = [1,2,3,4,5,6,7,8,9];
let target = 6;

function binarySearch(arr,target,beg=0,end=arr.length-1){
  if(beg>end) return "not found"; 
  let mid = Math.floor((beg+end)/2);
  if(arr[mid]==target){
    return mid; 
  } else if(target>arr[mid]){
    return binarySearch(arr,target,mid+1,end);
  } else {
    return binarySearch(arr,target,beg,mid-1);
  }
}

console.log(binarySearch(arr,target));