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
          this.root = node; 
      } else {
          this._insert(this.root,node);
      }
  }
  
  _insert(root,node){
      if(node.value<root.value){
          if(!root.left){
              root.left = node; 
          } else {
              this._insert(root.left,node);
          }
      } else {
          if(!root.right){
              root.right = node; 
          } else {
              this._insert(root.right,node);
          }
      }
  }

  preorder(node){
    if(!node) return;
    console.log(node.value);
    this.preorder(node.left);
    this.preorder(node.right);
  }

  inorder(node){
    if(!node) return; 
    this.inorder(node.left);
    console.log(node.value);
    this.inorder(node.right);
  }

  postorder(node){
    if(!node) return; 
    this.postorder(node.left);
    this.postorder(node.right);
    console.log(node.value);
  }
  
  levelorder(){
    if(!this.root) return; 
    let queue = [];
    queue.push(this.root);
    while(queue.length>0){
      let current = queue.shift();
      console.log(current.value);
      if(current.left) queue.push(current.left);
      if(current.right) queue.push(current.right)
    }
  }

  delete(value){
     this.root = this._delete(this.root,value);
  }

  _delete(node,value){
    if(!node) return node;
    
    //traversal 
    if(value<node.value){
      node.left = this._delete(node.left,value);
    } else if(value>node.value){
       node.right =  this._delete(node.right,value);
    } else {
       //Case 1
       if(!node.left && !node.right){
        return null; 
       }

       //Case 2
       if(!node.left){
        return node.right; 
       } else if(!node.right){
        return node.left; 
       }

       //Case 3
       const minnode = this._minvalue(node.right);
       node.value = minnode.value; 
       node.right = this._delete(node.right,minnode.value)
    }
    return node; 
  }

  _minvalue(node){
    let current = node; 
    while(current.left){
      current = current.left; 
    }
    return current; 
  }

  search(value){
    return this._search(this.root,value);
  }

  _search(node,value){
     if(!node) return false; 
     if(node.value == value) return true; 
     if(value<node.value){
        return this._search(node.left,value)
     } else {
        return this._search(node.right,value);
     }
  }

  display(node){
      if(!node) return; 
      console.log(`Root: ${node.value}, Left: ${node.left?.value || null}, Right: ${node.right?.value || null}`);
      this.display(node.left);
      this.display(node.right);
  }
}

const tree = new Tree();
tree.insert(15);
tree.insert(10);
tree.insert(5);
tree.insert(4);
tree.insert(20);
// console.log('pre');
// tree.preorder(tree.root);
// console.log('in')
// tree.inorder(tree.root);
// console.log('post')
// tree.postorder(tree.root);
// console.log('level')
// tree.levelorder()
tree.delete(20)
tree.levelorder();