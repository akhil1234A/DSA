//Use the queue implementation to simulate a ticket counter system.  
//inputs : A, B, C, D, E



class Queue {
  constructor(){
    this.queue = [];
  }

  enqueue(data){
    this.queue.push(data);
    console.log(`Person ${data} arrives`);
  }

  dequeue(){
    this.isEmpty();
    const data = this.queue.shift()
    console.log(`Person ${data} served and left`);
  }

  isEmpty(){
    if(this.queue.length == 0 ){
      console.log("Queue is Empty");
      return; 
    }
  }

  front(){
    this.isEmpty();
    const front = this.queue[0]
    console.log(`${front} next in line`);
  }

  display(){
    console.log(this.queue.join(', '))
  }
}

const queue = new Queue();
queue.enqueue('A');
queue.enqueue("B");
queue.enqueue("C");
queue.display()
queue.dequeue();
queue.front();