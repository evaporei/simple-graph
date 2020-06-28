class Graph {
  constructor() {
    this.graph = {}
  }

  addVertex(vertex) {
    this.graph[vertex] = []
  }

  addEdge(v1, v2) {
    this.graph[v1].push(v2)
    this.graph[v2].push(v1)
  }

  bfs(startingNode) {
    const visited = {}
    visited[startingNode] = true

    const queue = [startingNode]

    while (queue.length) {
      const node = queue.shift()

      console.log(node)

      const neighbors = this.graph[node]

      for (const neighbor of neighbors) {
        if (!visited[neighbor]) {
          visited[neighbor] = true
          queue.push(neighbor)
        }
      }
    }
  }

  dfs(startingNode) {
    const visited = {}

    this._dfs(startingNode, visited)
  }

  _dfs(vertex, visited) {
    visited[vertex] = true
    console.log(vertex)

    const neighbors = this.graph[vertex]
    for (const neighbor of neighbors) {
      if (!visited[neighbor]) {
        this._dfs(neighbor, visited)
      }
    }
  }
}

const g = new Graph()
const vertices = ['A', 'B', 'C', 'D', 'E', 'F']
  
for (const vertice of vertices) { 
    g.addVertex(vertice)
} 
  
g.addEdge('A', 'B'); 
g.addEdge('A', 'D'); 
g.addEdge('A', 'E'); 
g.addEdge('B', 'C'); 
g.addEdge('D', 'E'); 
g.addEdge('E', 'F'); 
g.addEdge('E', 'C'); 
g.addEdge('C', 'F');

console.log('g', g) // for debugging

// A B D E C F
g.bfs('A')

// A B C E D F
g.dfs('A')
