class Node {
  constructor(data){
    this.val = data; 
    this.next = null; 
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;  
  }

  append(data){
    const node = new Node(data);

    if(!this.head){
      this.head = this.tail = node; 
      return; 
    }
    this.tail.next = node; 
    this.tail = node; 
  }

  delete(data){
    let current = this.head; 
    if(current.val == data){
      this.head = this.head.next;
      if(!this.head) this.tail = null; 
      return; 
    }

    while(current.next && current.next.val!=data){
      current = current.next; 
    }

    if(!current.next) return; 

    if(current.next === this.tail){
      this.tail = current; 
    }

    current.next = current.next.next; 
     
  }

  display(){
    let current = this.head; 
    let result = [];
    while(current){
      result.push(current.val);
      current = current.next; 
    }
    console.log(result)
  }

}

const ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.append(4);
ll.append(5);
ll.display();
ll.delete(5);
ll.display();
ll.append(6);
ll.display();