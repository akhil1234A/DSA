//Object Based Queue
class Queue{
  constructor(){
    this.queue = {};
    this.rear = 0; 
    this.front = 0; 
  }

  enqueue(data){
    this.queue[this.rear] = data;
    this.rear++; 
  }

  dequeue(){
    this.isEmpty();
    const deleted = this.queue[this.front];
    delete this.dequeue[this.front];
    this.front++; 
  }

  frontElement(){
    console.log(this.queue[this.front]); 
  }

  display(){
    console.log(Object.values(this.queue))
  }

  isEmpty(){
    if(this.rear === this.front){
      console.log("empty");
      return; 
    }
  }

  size(){
    console.log(this.rear-this.front);
  }
}

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(6);
queue.dequeue();
queue.frontElement();
queue.display();
queue.size()