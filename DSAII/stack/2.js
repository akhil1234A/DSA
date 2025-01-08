//Evaluating a postfix Expression 
//+ - / *  

class Stack {
   constructor(){
    this.stack = [];
   }

   push(data){
     this.stack.push(data);
   }

   pop(){
    return this.stack.pop();
   }

   isEmpty(){
     return this.stack.size == 0; 
   }

   display(){
    console.log(this.stack);
   }
}


function postfix(str){

  const stack = new Stack();

   for(let i=0; i<str.length; i++){
    if(!isNaN(str[i])){
      stack.push(str[i]);
    }else{
      number1 = Number(stack.pop());
      number2 = Number(stack.pop());
      let result;
      switch(str[i]){
        case '+': result = number1+number2;
        break;
        case '-': result = number1-number2;
        break;
        case '*': result = number1*number2;
        break;
        case '/': result = number1/number2;
        break;
        default: console.log("Invalid Operator");
      }
      stack.push(result);
    }
   }
   return stack.pop();
}

console.log(postfix("12+"))
console.log(postfix("48/"));
console.log(postfix('26-'));
console.log(postfix("43*"));

