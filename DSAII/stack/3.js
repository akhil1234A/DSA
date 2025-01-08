//Minimum Element in a Stack

class Stack{
  constructor(){
    this.stack = [];
    this.minStack = [];
  }

  push(data){
     this.stack.push(data);
     if(this.minStack.length== 0 || data<this.mintop()){
      this.minStack.push(data);
     }
  }

  pop(){
    let number = this.stack.pop();
    if(this.mintop()==number){
      this.minStack.pop();
    }
  }

  display(){
    console.log(this.stack);
  }

  mintop(){
    return this.minStack[this.minStack.length-1];
  }
}

const stack = new Stack();
stack.push(4);
stack.push(5);
stack.push(1);
stack.push(8);
stack.display();
console.log(stack.mintop())
