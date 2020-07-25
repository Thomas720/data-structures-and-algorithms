"use strict";

const getEdge = require("../getEdge");
const Graph = require("../graph.js");

describe("getEdge", () => {
  let graph;

  graph = new Graph();
  graph.addNode("Seattle");
  graph.addNode("Vancouver");
  graph.addNode("Portland");
  graph.addNode("Spokane");

  graph.addEdge("Seattle", "Vancouver", 89);
  graph.addEdge("Seattle", "Portland", 70);
  graph.addEdge("Vancouver", "Portland", 40);
  graph.addEdge("Seattle", "Spokane", 250);

  it("returns true when path exists, one edge", () => {
    expect(getEdge(graph, ["Seattle", "Vancouver"])).toBe("True, $89");
  });

  it("returns true when path exists, two edges", () => {
    expect(getEdge(graph, ["Seattle", "Vancouver", "Portland"])).toBe(
      "True, $100"
    );
  });

  it("returns false when a path does not exist", () => {
    expect(getEdge(graph, ["Vancouver", "Spokane"])).toBe("False, $0");
  });

  it("returns false when first city does not exist in graph", () => {
    expect(getEdge(graph, ["Eugene", "Seattle"])).toBe("False, $0");
  });
});
