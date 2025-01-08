class HashTable{
  constructor(size=10){
    this.size = size; 
    this.bucket = new Array(size).fill(null);
    this.count = 0; 
  }

  _hash(key){
    let index = 0;  
    for(let i=0; i<key.length; i++){
      index+= key.charCodeAt(i);
    }
    return index % this.size; 
  }

  _resize(){
    this.size = this.size * 2; 
    this.count = 0; 
    this.oldbucket = this.bucket;
    this.bucket = new Array(this.size).fill(null);
    this.oldbucket.forEach(entries=>{
      if(entries){
        this.set(entries.key,entries.value);
      }
    })

  }

  set(key,value){
    if(this.count>=(this.size/2)) this._resize();
    let index = this._hash(key);
    while(this.bucket[index] && this.bucket[index].key!=key){
      index = (index + 1) % this.size; 
    }
    if(!this.bucket[index]){
      this.count++; 
    }
    this.bucket[index] = {key,value}
  }

  get(key,value){
    let index = this._hash(key);
    while(this.bucket[index]){
      console.log('index',index)
      if(this.bucket[index].key == key){
        console.log(this.bucket[index].value)
        return this.bucket[index].value; 
      }
      index = (index + 1) % this.size; 
    }
    return null; 
  }

  delete(key){
    let index = this._hash(key);
    while(this.bucket[index]){
      if(this.bucket[index],key == key){
        const deleted = this.bucket[index]; 
        this.bucket[index] = null; 
        this.count--; 
        return deleted; 
      }
      index = (index + 1) % this.size; 
    }
    console.log('no key found');
  }

  display(){
    const obj = {}
    for(let i=0; i<this.size; i++){
      if(this.bucket[i]){
        obj[this.bucket[i].key] = this.bucket[i].value; 
      }
    }
    console.log(obj)
  }
}

const table = new HashTable(6);

table.set('Akhil',12)
table.set('Adhil',12)
table.set('abc',12);
table.set('bbc',12);
table.get('abc');
table.get('ymc');
table.delete('d');
table.delete('ymc')
table.set('a',5)
table.set('b',6)

table.display()
