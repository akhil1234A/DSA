class HashTable{

  constructor(size=5){
    this.size = size;
    this.table = new Array(size).fill(null);
    this.count = 0; 
  }

  _hash(key){
    let hashedIndex = 0; 
    for(let i=0; i<key.length; i++){
      hashedIndex+=key.charCodeAt(i);
    }
    return hashedIndex%this.size; 
  }

  _resize(){
    this.size = this.size*2; 
    this.count = 0; 
    this.oldTable = this.table;
    this.table = new Array(this.size).fill(null);
    this.oldTable.forEach(entries=>{
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
    if(this.table[index].key === key ){
      console.log(this.table[index].value);
      return this.table[index].value
    }
    index = (index+1)%this.size; 
  }
   return null;  
  }

  delete(key){
    let index = this._hash(key);

    while(this.table[index]){
      if(this.table[index].key == key ){
        const deleted = this.table[index];
        this.table[index] = null; 
        console.log("key deleted");
        this.count--; 
        return deleted; 
      }
      index = (index+1)%this.size;
    }

    console.log("no key found");
  }

  display(){
    console.log(this.table);
  }

}

const table = new HashTable();
table.set('Alice', 123);
table.set('Bob', 124);
table.set('Charlie', 125);
table.set('Eve', 126);
table.get('Alice');
table.get('Bob');
table.get('Charlie');
table.get('Eve');
table.set('Akhil',123)
table.set('rahul',123)
table.display();