//Binary Search

let arr = [1,2,3,4,5,6,7,8,9];
let target = 4; //3

function binarySearch(arr,n){
  let beg = 0; 
  let end = arr.length-1; 
  while(beg<=end){
    let mid = Math.floor((beg+end)/2)
    if(n==arr[mid]){
      return mid;
    } else if(n>arr[mid]){
      beg=mid + 1;
    } else {
      end = mid -1; 
    }
  }
}

console.log(binarySearch(arr,target))