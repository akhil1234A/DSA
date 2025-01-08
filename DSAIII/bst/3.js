//Closest Value 

class Node {
  constructor(data){
    this.value = data; 
    this.right = null; 
    this.left = null; 
  }
}

class BinarySearchTree{
  constructor(data){
    this.root = null; 
  }
  
  insert(data){
    const node = new Node(data);

    if(!this.root){
      this.root = node; 
    } else {
      this._insert(this.root,node);
    }
  }

  _insert(current,node){
    if(node.value<current.value){
      if(!current.left){
        current.left = node; 
      } else {
        this._insert(current.left,node);
      }
    } else{
      if(!current.right){
        current.right = node; 
      } else {
        this._insert(current.right,node);
      }
    }   
  }

   closest(target){
    let closest = this.root.value;
    let current = this.root;
    
    while(current){
       if(Math.abs(current.value-target)<Math.abs(closest-target)){
        closest = current.value; 
       }

       if(target<current.value){
        current = current.left; 
       } else if(target>current.value){
        current = current.right; 
       } else {
        break; 
       }
    }
    return closest; 
   }

  display(node){
    if(!node) return; 
    console.log(`Root: ${node.value}, Left: ${node.left?.value || null}, Right: ${node.right?.value || null}`);
    this.display(node.left);
    this.display(node.right);
  }

}

const tree = new BinarySearchTree();
tree.insert(15);
tree.insert(10);
tree.insert(20);
tree.insert(5);
tree.insert(1);
tree.insert(3);
tree.insert(25);
tree.display(tree.root)
console.log(tree.closest(0))