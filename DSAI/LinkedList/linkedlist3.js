class Node {
  constructor(data){
      this.data = data; 
      this.next = null; 
  }
}

class LinkedList {
  constructor(){
      this.head = null; 
  }
  
  append(data){
      const node = new Node(data);
      
      if(this.head == null){
        this.head = node; 
        return; 
      }
      
      let current = this.head; 
      
      while(current.next){
          current = current.next; 
      }
      current.next = node; 
  }
  
  print(){
      let current = this.head;
      let result = '';
      while(current){
          result+=`${current.data}->`;
          current = current.next; 
      }
      result+='null';
      console.log(result)
  }
  
  middle(){
   let current = this.head; 
   let prev = this.head; 
   
   if(this.head==null || this.head.next==null){
      console.log('cannot find middle');
      return; 
   }
   
   let slow = current.next; 
   let fast = current.next.next; 
   
   while(fast && fast.next){
       prev = slow; 
       slow = slow.next;
       fast = fast.next.next; 
   }
   let middle = slow;
   prev.next = middle.next; 

  }
  
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.middle();
list.print();