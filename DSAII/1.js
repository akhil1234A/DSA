
//Adjacency List
//Add Vertex
//Add Edge
//BFS
//DFS

class Graph {
  constructor(){
    this.adjacencyList = {}
  }

  addVertex(vertex){
    if(!this.adjacencyList[vertex]){
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2){
    if(!this.adjacencyList[vertex1]) this.addVertex(vertex1);
    if(!this.adjacencyList[vertex2]) this.addVertex(vertex2);
    this.adjacencyList[vertex1].push(vertex2);
  }

  bfs(start){
    let queue = [start];
    let result = [];
    let set = new Set();
    while(queue.length>0){
      let temp = queue.shift();
      if(set.has(temp)) continue;
      result.push(temp);
      set.add(temp);
      for(let v of this.adjacencyList[temp]){
        queue.push(v);
      }
    }
    console.log(result)
  }

  dfs(start){
    let result = [];
    let set = new Set();

    const dfsHelper = (vertex)=>{

      result.push(vertex);
      set.add(vertex);

      for(let v of this.adjacencyList[vertex]){
        if(!set.has(v)){
          dfsHelper(v);
        }
      }

    }

    dfsHelper(start);
    console.log(result)
  }

  display(){
    for(let vertex in this.adjacencyList){
      console.log(`${vertex} -> ${this.adjacencyList[vertex].join(',')}`);
    }
  }

}

const graph = new Graph();
graph.addEdge('A','B');
graph.addEdge('A','C');
graph.addEdge('B','D');
graph.addEdge('B','E');
graph.addEdge('E','F');
graph.display();
graph.bfs("A");
graph.dfs("A");