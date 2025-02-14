
class Node{
  constructor(data){
      this.val = data; 
      this.next = null; 
      this.prev = null; 
  }
}

class Doubly{
  constructor(){
      this.root = null; 
      this.tail = null; 
  }
  
  append(data){
      const node = new Node(data);
      if(!this.root){
          this.root = this.tail = node; 
          return; 
      }
      this.tail.next = node; 
      node.prev = this.tail; 
      this. tail = node; 
  }
  
  insertFirst(data){
      const node = new Node(data);
      if(!this.root){
          this.root = this.tail = node; 
          return; 
      }
      node.next = this.root; 
      this.root.prev = node; 
      this.root = node; 
  }
  
  delete(data){
      
      let current = this.root; 
      
      while(current){
          
          if(this.root.val == data){
              if(this.tail==this.root) this.tail = null; 
              this.root = this.root.next; 
              this.root.prev = null; 
              return;
              
          } else if(this.tail.val == data){
              this.tail = this.tail.prev; 
              this.tail.next.prev = null; 
              this.tail.next = null; 
              return; 
          } 
          if(current.val == data){
              current.prev.next = current.next; 
              current.next.prev = current.prev; 
              return; 
          }
          current = current.next; 
      }
      
      return false; 
  }
  
  forward(){
      let current = this.root; 
      let result = [];
      while(current){
          result.push(current.val);
          current = current.next; 
      }
      console.log(result);
  }
  
  backward(){
      let current = this.tail; 
      let result = [];
      while(current){
          result.push(current.val);
          current = current.prev; 
      }
      console.log(result)
  }
}

const list = new Doubly();
list.append(4);
list.append(5);
list.append(6);
list.insertFirst(9);
list.delete(4)
list.forward();
list.backward();