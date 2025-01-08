//Queue using Two Stack  
class Queue{
  constructor(){
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(data){
    this.stack1.push(data);
  }

  dequeue(){
    this.isEmpty();

    if(this.stack2.length === 0){
      while(this.stack1.length>0){
        this.stack2.push(this.stack1.pop());
      }
    }
    
    return this.stack2.pop();
  }

  front(){
    this.isEmpty();
    if(this.stack2.length == 0){
      while(this.stack1.length>0){
        this.stack2.push(this.stack1.pop())
      }
    }
    console.log(this.stack2[this.stack2.length-1]);
  }

  isEmpty(){
     if(this.stack1.length === 0 && this.stack2.length === 0 ){
      console.log("Queue is Empty"); 
      return undefined; 
     }
  }

 
}

const queue = new Queue();
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.dequeue();
queue.enqueue(8);
queue.dequeue();
queue.dequeue();
queue.dequeue();

queue.front()
