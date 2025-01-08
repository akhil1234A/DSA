//Largest Element in BST
//Smallest Element in BST 
//Second Largest Element in BST

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

  largest(){
    let current = this.root;
   - let largest = this.root.value;  
    while(current.right){
      largest = current.right.value;
      current = current.right; 
    }
    return largest; 
  }

  secondLargest(){
    if(!this.root.right) {
      console.log("minimum two numbers requied");
      return; 
    }
    let current = this.root; 
    let largest = this.root; 
    let secondLargest = this.root; 
    while(current.right) {
      secondLargest = largest.value;
      largest = current.right;  
      current = current.right; 
    }
    return secondLargest; 
  }

  smallest(){
    let current = this.root; 
    let smallest = this.root.value; 
    while(current.left){
      smallest = current.left.value; 
      current = current.left; 
    }
    return smallest; 
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
console.log(tree.largest());
console.log(tree.smallest())
console.log(tree.secondLargest())