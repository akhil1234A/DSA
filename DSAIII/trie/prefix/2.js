//delete 
class TrieNode{
  constructor(){
    this.children = {}
    this.isEnd = false; 
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let current = this.root;
    for (let char of word) {
      if (!current.children[char]) {
        current.children[char] = new TrieNode();
      }
      current = current.children[char];
    }
    current.isEnd = true;
  }

  search(word) {
    let current = this.root;
    for (let char of word) {
      if (!current.children[char]) {
        return false;
      }
      current = current.children[char];
    }
    return current.isEnd;
  }

  startsWith(prefix) {
    let current = this.root;
    for (let char of prefix) {
      if (!current.children[char]) {
        return false;
      }
      current = current.children[char];
    }
    return true;
  }

  delete(word) {
    const deleteHelper = (node, word, depth) => {

      if(depth == word.length){
        if(node.isEnd){
          node.isEnd = false; 
        }

        return Object.keys(node.children).length === 0&& !node.isEnd; 
      }

      const char = word[depth];
      const charNode = node.children[char];

      if(!charNode){
        return false; 
      }

      const shouldDelete = deleteHelper(charNode,word,depth+1);

      if(shouldDelete){
        delete node.children[char]; 

        return Object.keys(node.children).length === 0 && !node.isEnd; 
      }

      return false; 
    }

    deleteHelper(this.root, word, 0);
  }

  display(){
    console.log(JSON.stringify(this.root,null,2))
  }
}


 
const trie = new Trie();
trie.insert("car");
// trie.insert("cart");
// trie.insert("car");
// trie.insert("cart");
// trie.insert("dog");

trie.delete("car");
console.log(trie.search('car'));
trie.display();