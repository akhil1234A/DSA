//Use Selection Sort to sort names based on their lengths.
const names = ["Alexander", "Bob", "Christina", "David", "Edward", "Fay", "Georgina"];

function sortName(arr){
  
  for(let i=0; i<arr.length-1; i++){
    let minIndex = i; 
    for(let j=i+1; j<arr.length; j++){
      if(arr[j].length<arr[minIndex].length){
        minIndex = j; 
      }
    }
    if(i!=minIndex){
      [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
    }
  }
  return arr; 
}

console.log(sortName(names))