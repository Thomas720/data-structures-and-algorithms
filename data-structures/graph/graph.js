class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
  }

  addVertex(v) {
   
    this.AdjList.set(v, []);
  }

  printGraph() {
    let get_keys = this.AdjList.keys();

    for (let i of get_keys) {
      let get_values = this.AdjList.get(i);
      let conc = "";

      let (let j of get_values) 
      conc += j + " ";

      console.log(i + " -> " + conc);
    }
  }
}
