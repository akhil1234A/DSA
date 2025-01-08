class CircularQueue{
  constructor(size){
    this.array = new Array(size);
    this.front = 0; 
    this.rear = -1; 
    this.size = size; 
    this.count = 0; 
  }

  enqueue(data){
    if(this.size == this.count){
      console.log("Queue is full, cannot enqueue");
      return; 
    }
    this.rear = (this.rear + 1) % this.size;
    this.array[this.rear] = data; 
    this.count++; 
  }

  dequeue(){
    if(this.count == 0 ){
      console.log("queue is empty");
      return; 
    }
   const dequeuElement = this.array[this.front];
   this.front = (this.front + 1 ) % this.size; 
   this.count--; 

   return dequeuElement;
  }

  frontE(){
    if(this.count == 0) {
      console.log("queue is empty");
      return; 
    }
    console.log(this.array[this.front])
  }

  rearE(){
    if(this.count == 0) {
      console.log("queue is empty");
      return; 
    }
    console.log(this.array[this.rear])
  }

  display(){
    if (this.count === 0) {
      console.log("Queue is empty");
      return;
    }

    let ele = [];
    let i = this.front;
    while(i!=this.rear){
      ele.push(this.array[i]);
      i = (i+1)%this.size;
    }
    ele.push(this.array[this.rear]);
    console.log(ele)
  }
}

const queue = new CircularQueue(5);
queue.enqueue(5);
queue.enqueue(4);
queue.enqueue(1);
queue.enqueue(6);
queue.enqueue(7);

queue.display();

queue.dequeue();

queue.enqueue(11);

queue.display();
