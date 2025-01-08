class TrieNode{
  constructor(){
    this.children = {};
    this.isEnd = false; 
  }
}

class Trie {
 constructor(){
  this.root = new TrieNode(); 
 }

 insert(string){

  let current = this.root; 

  for(let char of string){
    if(!current.children[char]){
      current.children[char] = new TrieNode();
    }
    current = current.children[char];
  }

  current.isEnd = true; 

 }

}

const Trie = new T