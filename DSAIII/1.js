
class Node{
  constructor(data){
    this.value = data;
    this.left = null;
    this.right = null; 
  }
}

class Tree{
  constructor(){
    this.root = null;
  }

  insert(data){
    const node = new Node(data);

    if(!this.root){
      this.root == node; 
    } else {
      this._insert(this.root,data);
    }

  }

  _insert(node,data){
    if(data.value<node.value){
      if(!node.left){
        node.left = data; 
      } else {
        this._insert(node.left,data);
      }
    } else {
      if(!node.right){
        node.right = data; 
      } else {
        this.insert(node.right,data);
      }
    }
  }

  inorder(node){
    if(!node) return; 

    this.inorder(node.left);
    console.log(node.value);
    this.inorder(node.right);
  }

  closest(value){
    let closest=this.root.value;
    let current = this.root; 
    while(current){
      
      if(Math.abs(closest-value)>Math.abs(current.value)){
        closest = current.value; 
      }
      if(value<closest.value){
        current = current.left;
      } else {
        current = current.right
      }

    }

    return closest; 
  }
}

const tree = new Tree();
tree.insert(15);
tree.insert(5);
tree.insert(20);
tree.inorder();
tree.closest(4);