function dijkstra(graph, source) {
  // Initialize distances to all vertices as Infinity
  const distances = {};
  const visited = new Set();
  const priorityQueue = new PriorityQueue();

  // Set initial distance for the source node
  for (const vertex in graph) {
      distances[vertex] = Infinity;
  }
  distances[source] = 0;
  priorityQueue.enqueue(source, 0);

  while (!priorityQueue.isEmpty()) {
      const currentNode = priorityQueue.dequeue().element;

      if (visited.has(currentNode)) continue;
      visited.add(currentNode);

      // Visit each neighbor of the current node
      for (const neighbor in graph[currentNode]) {
          const weight = graph[currentNode][neighbor];
          const newDist = distances[currentNode] + weight;

          // If a shorter path to the neighbor is found
          if (newDist < distances[neighbor]) {
              distances[neighbor] = newDist;
              priorityQueue.enqueue(neighbor, distances[neighbor]);
          }
      }
  }

  return distances;
}

// Priority Queue implementation for Dijkstra's algorithm
class PriorityQueue {
  constructor() {
      this.queue = [];
  }

  enqueue(element, priority) {
      const item = { element, priority };
      let added = false;
      
      for (let i = 0; i < this.queue.length; i++) {
          if (this.queue[i].priority > priority) {
              this.queue.splice(i, 0, item);
              added = true;
              break;
          }
      }

      if (!added) {
          this.queue.push(item);
      }
  }

  dequeue() {
      return this.queue.shift();
  }

  isEmpty() {
      return this.queue.length === 0;
  }
}

// Example graph as an adjacency list
const graph = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 6 },
  C: { A: 4, B: 2, D: 3 },
  D: { B: 6, C: 3 }
};

const source = 'A';
console.log(dijkstra(graph, source));
