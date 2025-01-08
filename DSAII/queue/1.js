class Queue{
  constructor(){
    this.queue = []
  }

  enqueue(data){
    this.queue.push(data);
  }

  dequeue(){
    this.isEmpty()
    return this.queue.shift();
  }

  isEmpty(){
    if(this.queue.size == 0){
      console.log("queue is empty");
      return; 
    }
  }
  
  front(){
    console.log(this.queue[0])
  }
  display(){
    this.isEmpty();
    console.log(this.queue.join(', '))
  }
}

const queue = new Queue();
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.front();
queue.dequeue()
queue.display()