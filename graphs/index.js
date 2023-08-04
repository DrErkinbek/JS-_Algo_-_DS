class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        )
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex)

        }
        delete this.adjacencyList[vertex]
    }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");

console.log(g.adjacencyList);
g.addEdge("Dallas", "Aspen");
console.log(g.adjacencyList);

g.addEdge("Dallas", "Aspen");

// Remove vertex example
// If we have graph of airlines we need to vemove vertex of Hong Kong
let airline = {
    "Tokyo": ["Dallas", "Hong Kong"],
    "Dallas": ["Tokyo", "Aspen", "Hong Hong", "Los Angeles"],
    "Hong Kong": ["Tokyo", "Dallas", "Los Angeles"],
    "Los Angeles": ["Hong Kong", "Dallas"]
}

airline.removeVertex("Hong Kong");

// After removing it should look like this.
let airline2 = {
    "Tokyo": ["Dallas"],
    "Dallas": ["Tokyo", "Aspen", "Los Angeles"],
    "Aspen": ["Dallas"],
    "Los Angeles": ["Dallas"]
}

let newgraph = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong");