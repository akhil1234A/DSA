//Longest Common Prefix 
class Trie {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }

  insert(word) {
    let current = this;
    for (const char of word) {
      if (!current.children[char]) {
        current.children[char] = new Trie();
      }
      current = current.children[char];
    }
    current.isEndOfWord = true;
  }

  longestCommonPrefix() {
    let prefix = '';
    let current = this;

    while(true){
      let keys = Object.keys(current.children);
    

      if(keys.length!=1 || current.isEndOfWord) break; 

      prefix+=keys[0];
      current = current.children[keys[0]];
    }
    
    return prefix; 
  }

  display(){
    console.log(JSON.stringify(this.children,null,2))
  }
}

// Test Case
const trie = new Trie();
trie.insert("flower");
trie.insert("flow");
trie.insert("flight");
// trie.display();
console.log("Longest Common Prefix:", trie.longestCommonPrefix()); // Output: "fl"
