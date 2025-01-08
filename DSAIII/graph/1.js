class Graph{
  constructor(){
    this.adjacencyList = {}
  }

  addVertex(vertex){
    if(!this.adjacencyList[vertex]){
      this.adjacencyList[vertex]= [];
    }
  }

  addEdge(vertex1,vertex2){
    if(this.adjacencyList[vertex1]){
      this.adjacencyList[vertex1].push(vertex2);
    }
  }

  display(){
    for(let vertex in this.adjacencyList){
      console.log(`${vertex} -> ${this.adjacencyList[vertex].join(', ')}`)
    }
  }

  bfs(start){
    let queue = [start];
    let visited = new Set();    
    let result = [];

    visited.add(start);
   

    while(queue.length>0){
      const current = queue.shift();
  

      for(let vertex of this.adjacencyList[current]){
        if(!visited.has(vertex)){
          result.push(vertex);
          visited.add(vertex);
          queue.push(vertex);
        }
      }

    }

    return result; 
  }

  dfsRecursive(start) {
    let result = [];
    let visisted = new Set();

    const dfs = (node)=>{
      
      
      result.push(node);
      visisted.add(node);

      for(let vertex of this.adacencyList[node]){
        if(!visisted.has(vertex)){
          dfs(vertex);
        }
      }

    }

    dfs(start);
    return result; 
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");

graph.display()
console.log(graph.bfs("A"));

console.log("DFS Traversal:");
console.log(graph.dfsRecursive("A"));