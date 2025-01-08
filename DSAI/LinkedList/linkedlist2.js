class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null; 
    this.size = 0; 
  }

  append(data){
    const newNode = new Node(data);

    if(this.head == null){
      this.head = newNode; 
      this.tail = newNode; 
    }
    else{
    this.tail.next = newNode; 
    this.tail = newNode; 
    }
    this.size++; 
  }

  insertFirst(data){
     const newNode = new Node(data);
      newNode.next = this.head; 
      this.head = newNode; 
      this.size++; 
  }

  print(){
    let current = this.head; 
    let result = ''
    while(current){
      result +=`${current.data}->`
      current = current.next; 
    }
    result+='null';
    console.log(result);
    console.log('tail',this.tail.data)
    this.getSize();
  }

  insertIndex(data,index){
    const newNode = new Node(data);

    if(index>this.size+1){
      console.log("index out of bound");
      return; 
    }

    if(index==0){
      this.insertFirst(data);
      return; 
    } else if(index==this.size){
        this.append(data);
        return; 
    } else {
      let current = this.head; 
    for(let i=1; i<index; i++){
      current = current.next; 
    }
    newNode.next = current.next; 
    current.next = newNode; 
    }
    this.size++; 
  }

  delete(data){
     
    if(this.head.data === data){
      this.head = this.head.next; 
      this.size--; 
      if(this.size==0) this.tail = null; 
      return; 
    }

    let current = this.head; 
    for(let i=1; i<=this.size; i++){
      if(current.next.data == data){
        current.next = current.next.next; 
        if(i+1==this.size) this.tail = current; 
        this.size--; 
        return; 
      }
      current = current.next; 
    }
  }

  getSize(){
    console.log('Size: ', this.size)
  }
}

const list = new LinkedList()
list.append(4);
list.append(5);
list.append(6);
list.getSize();
list.insertFirst(9);
list.insertFirst(8);
list.insertIndex(11,2)
list.insertIndex(12,2)
list.insertIndex(12,0)
list.insertIndex(13,7)
list.insertIndex(15,8);
list.print()
list.delete(6)
list.print()
