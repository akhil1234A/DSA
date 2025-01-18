class Node{
    constructor(data){
        this.value = data;
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

        if(!current){
            console.log("list is empty");
            return; 
        }
        if(current.value == data){
            this.head = this.tail = current.next; 
            return; 
        }
        while(current.next){
            if(current.next.value == data){
                current.next = current.next.next; 
                return; 
            }
            current = current.next;
        }

        return false; 
    }

    middle(){
        let current = this.head; 
        let prev = this.head; 
        let slow = current.next; 
        let fast = current.next.next; 

        while(fast && fast.next){
            prev = slow; 
            slow = slow.next;
            fast = fast.next.next;
        }
        prev.next = slow.next;
    }


    display(){
        let current = this.head; 
        let result = [];
        while(current){
            result.push(current.value);
            current = current.next; 
        }
        console.log(result.join('->'));
    }
}

const list = new LinkedList();
list.append(4);
list.append(6);
list.append(7);
list.append(8);
list.append(9);
list.display();
list.middle();
list.display()