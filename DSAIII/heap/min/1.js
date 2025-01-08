class MinHeap{
  constructor(){
    this.heap = [];
  }

insert(data){
  this.heap.push(data);
  this.bubbleup(this.heap.length-1);
}

bubbleup(index){
  while(index>0){
    let parent = Math.floor((index-1)/2);
    if(this.heap[parent]<this.heap[index]) break; 
    
    [this.heap[parent],this.heap[index]] = [this.heap[index],this.heap[parent]];
    index = parent; 
  }
}

removemin(){
  if(this.heap.length==0) return null; 
  if(this.heap.length==1) return this.heap.pop();
  let min = this.heap[0];
  this.heap[0] = this.heap.pop();
  this.bubbledown(0);
  return min;
}

bubbledown(index){
  let length = this.heap.length; 
  while(true){
    let leftchild = 2*index+1; 
    let rightchild = 2*index+2; 
    let smallest = index; 

    if(leftchild<length && this.heap[leftchild]<this.heap[smallest]){
      smallest = leftchild; 
    }
    if(rightchild<length && this.heap[rightchild]<this.heap[smallest]){
      smallest = rightchild;
    }
    if(smallest == index) break; 
    [this.heap[index],this.heap[smallest]] = [this.heap[smallest],this.heap[index]];
    index = smallest; 
  }
}

buildHeap(arr){
  this.heap = arr; 
  let startIndex = Math.floor(arr.length/2)-1; 
  for(let i=startIndex; i>=0; i--){
    this.bubbledown(i); 
  }
}

  display(){
    console.log(this.heap);
  }
}

const heap = new MinHeap();
heap.insert(5);
heap.insert(3);
heap.insert(4);
heap.insert(1);
heap.insert(6);
heap.display();
heap.removemin();
heap.display();
heap.buildHeap([5,4,1,2,3,6]);
heap.display();
