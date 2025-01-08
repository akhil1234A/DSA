//Valid BST

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

const result = valid(tree.root);
console.log(result);

function valid(node,min=-Infinity,max=Infinity){
  if(!node) return true; 

  if (node.value <= min || node.value >= max) return false;

  return (valid(node.left,min,node.value) && valid(node.right,node.value,max))
}