class TrieNode{
  constructor(){
    this.children = {}
    this.isEnd = false; 
  }
}

class Trie{
  constructor(){
    this.root = new TrieNode(); 
  }

  insert(str){

    let current = this.root; 

    for(let char of str){
      if(!current.children[char]){
         current.children[char] = new TrieNode();
      }
      current = current.children[char];
    }
    current.isEnd = true; 
  }

  search(word){

    let current = this.root; 

    for(let char of word){
      if(!current.children[char]){
          return false;  
      }
      current = current.children[char];
    }

    return current.isEnd; 
  }

  startsWith(prefix){
    let current = this.root; 

    for(let char of prefix){
      if(!current.children[char]){
        return false; 
      }
      current = current.children[char];
    }
    return true; 
  }

  display(){
    console.log(JSON.stringify(this.root,null,2));
  }

}

const trie = new Trie();
trie.insert('cat');
trie.insert('car');
trie.insert('cab');
console.log(trie.startsWith('cag'))
// trie.display();