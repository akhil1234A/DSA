//Check if a String Contains Only Unique Characters

let str = 'abcde';
const set = new Set(str);

console.log(set.size == str.length)