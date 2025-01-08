class Graph{
  constructor(){
    this.adjacencyList = {};
  }

  addVertex(vertex){
    if(!this.adjacencyList[vertex]){
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1,vertex2){
    if(this.adjacencyList[vertex1]){
      this.adjacencyList[vertex1].push(vertex2);
    }
  }


  bfs(start){
    const queue = [start];
    let result = [];
    let visited = new Set();

    while(queue.length>0){
      const element = queue.shift();

      result.push(element);

      for(let neighbour of this.adjacencyList[element]){
        if(!visited.has(neighbour)){
          queue.push(neighbour);
          visited.add(neighbour);
        }
      }

    }
  }

}