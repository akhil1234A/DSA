//Use a hash table to count the frequency of characters in a string.

class HashTable{
  constructor(size){
    this.size = size;
    this.table = new Array(size).fill(null);
    let count = 0; 
  }

  _hash(key){
    let index = 0; 
    for(let i=0; i<key.length; i++){
      index+=key.charCodeAt(i);
    }
    return index%this.size; 
  }

  _resize(){
    this.size = this.size*2; 
    this.count = 0; 
    this.oldtable = this.table;
    this.table = new Array(this.size).fill(null);
    this.oldtable.forEach((entries)=>{
      if(entries){
        this.set(entries.key,entries.value)
      }
    })
  }

  set(key,value){

    if(this.count>=this.size/2) this._resize();
    let index = this._hash(key);

    while(this.table[index] && this.table[index].key!==key){
      index = (index+1)%this.size;
    }
    if(!this.table[index]){
      this.count++; 
    }
    this.table[index] = {key,value}
  }

  get(key){
    let index = this._hash(key);
    while(this.table[index]){
      if(this.table[index].key===key){
        console.log(this.table[index].value)
        return this.table[index].value;
      }
      index = (index+1)%this.size; 
    }
  }

  display(){
    console.log(this.table)
  }
}


let str = 'akhilanwer';
let map = new HashTable(str.length);

for(let i=0; i<str.length; i++){
  map.set(str[i],(map.get(str[i]) || 0)+1)
}
console.log(map);