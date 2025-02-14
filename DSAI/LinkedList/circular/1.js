class Node {
  constructor(data){
      this.val = data; 
      this.next = null; 
  }
}

class CircularLinkedList {
  constructor(){
      this.head = null;
  }
  
  append(data){
      const node = new Node(data);
      if(!this.head){
          this.head = node; 
          node.next = this.head; 
          return; 
      }
      let current = this.head; 
      while(current.next!=this.head){
          current = current.next; 
      }
      current.next = node; 
      node.next = this.head; 
  }
  
  traversal(){
      let current = this.head; 
      let result = [];
      do {
          result.push(current.val);
          current = current.next; 
      } while(current!=this.head)
      console.log(result);
      return; 
  }
}

const list = new CircularLinkedList()
list.append(4);
list.append(5);
list.append(6);
list.traversal();