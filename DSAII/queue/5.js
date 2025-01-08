class Node {
  constructor(data){
    this.data = data;
    this.next = null; 
  }
}


class Queue {
  constructor(){
    this.head = null;
    this.tail = null; 
    this.size = 0; 
  }

  enqueue(data){
    const node = new Node(data);
    if(!this.head){
      this.head = this.tail = node; 
    } else {
      this.tail.next = node; 
      this.tail = node; 
    }
    this.size++; 
  }

  dequeue(){
    if(this.isEmpty()){
      console.log("queue is empty ");
      return; 
    }
    
    this.head = this.head.next; 
    if(!this.head){
      this.tail = null; 
    }
    this.size--; 

  }

  front(){
    console.log(this.head.data);
  }

  isEmpty(){
     return this.size === 0; 
  }

  display(){
    let current = this.head; 
    let result = [];
    while(current){
      result.push(current.data);
      current = current.next; 
    }
    console.log(result.join(', '));
  }
}

const queue = new Queue();
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.dequeue()
queue.front()
queue.display()