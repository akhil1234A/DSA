//Approach One
class Node{
  constructor(data){
    this.data = data;
    this.next = null; 
  }
}

class LinkedList{
  constructor(){
    this.head = null; 
    this.prev = null;
  }

  append(data){

    const newNode = new Node(data);

    if(this.head === null){
      this.head = newNode; 
      return; 
    }

    let current = this.head; 
    while(current.next){
      current = current.next; 
    }
    current.next = newNode; 
  }

  insertFirst(data){
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode; 
  }

  reverse(){
    let current = this.head; 
    let prev = this.prev
    while(current){
      let next = current.next;
      current.next = prev;
      prev = current; 
      current = current.next; 
    }
    this.head = prev;
  }

  print(){
    let current = this.head; 
    let result = ''
    while(current){
      result+= `${current.data}->`
      current = current.next; 
    }
    result+='null'
    console.log(result);
    
  }
}

const list = new LinkedList();
list.append(4);
list.append(5);
list.append(6);
list.append(2);
list.insertFirst(9)
list.insertFirst(8)
list.print()