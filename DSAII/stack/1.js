//Use a stack to check if a string has balanced parentheses/brackets.

class Stack{
  constructor(){
    this.stack = [];
  }

  push(data){
    this.stack.push(data); 
  }
 
  pop(){
    if(this.stack.size == 0 ) console.log("stack is empty");
    return this.stack.pop();
    
  }

  isEmpty(){
    return this.stack.size === 0
  }

  display(){
    console.log(this.stack.join('<-'));
  }
}

const object = {
  '(' : ')',
  '{' : '}',
  '[' : ']'
}

function valid(str){
   const stack = new Stack(); 
   let valid; 

   for(let i=0; i<str.length; i++){
    if(str[i] == '(' || str[i] == '{' || str[i] == '['){
      stack.push(str[i]);
    }
    if(str[i] == ')' || str[i] == '}' || str[i] == ']'){
       return object[stack.pop()] === str[i]
    }
   }
   return stack.isEmpty(); 
}

console.log(valid("()"));
console.log(valid("(("));
