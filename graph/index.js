
///////////////////////////////////


class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(data) {
    if (!this.adjacencyList[data]) {
      this.adjacencyList[data] = []
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1].push(vertex2);
    }
    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2].push(vertex1);
    }
  }


  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex =>
        vertex !== vertex2)
    }

    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex =>
        vertex !== vertex1)
    }
  }




}