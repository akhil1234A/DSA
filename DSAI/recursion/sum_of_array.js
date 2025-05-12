const arr = [1,2,3,4,5]; 

// using slice
// function sum(arr){
//     if(arr.length==0) return 0; 
//     return arr[0] + sum(arr.slice(1));
// }


//forward
// function sum(arr,index=0){
//     if(index>=arr.length) return 0; 
//     return arr[index] + sum(arr,index+1);
// }

//backward
// function sum(arr,index=arr.length-1){
//     if(index < 0) return 0; 
//     return arr[index] + sum(arr,index-1);
// }

//passing acc
// function sum(arr,index=0, acc=0){
//     if(index>=arr.length) return acc; 
//     return sum(arr,index+1,acc+arr[index]); 
// }
console.log(sum(arr));
