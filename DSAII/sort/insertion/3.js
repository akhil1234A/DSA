//sort array based on age
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 30 },
  { name: "David", age: 28 },
  { name: "Eve", age: 24 },
];

let n = people.length; 

for(let i=1; i<n; i++){
  let j = i-1; 
  let key = people[i];
  while(j>=0 && people[j].age>key.age){
    people[j+1] = people[j];
    j--; 
  }
  people[j+1]=key;
}


console.log(people)