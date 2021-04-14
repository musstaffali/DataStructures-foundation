/** 
 CTCI - 4.1
Minimal Tree


 Given a sorted (increasing order) array with unique integer elements,
 Write an algorithm to create a binary search tree with minmal height.


Hint
#19
#73
#116


Input: String
Output:  Boolean
Constraints: Optimize
Edge cases: empty strinf, spaces between and in front and end, more than 2 of the same char, even and odd char
 */

var checkRoute = function(value1, value2, graph) {
    var q1 = new Queue();
    var q2 = new Queue();
    var visited1 = {};
    var visited2 = {}; 
    // insert values into qs
    visited1[value1] = true;
    visited2[value2] = true;
    if(graph.hasNode(value1)) {
      for (var edge in graph.findEdges(value1)) {
        q1.add(edge);
      }
    }
    if(graph.hasNode(value2)) {
      for (var edge in graph.findEdges(value2)) {
        q2.add(edge);
      }
    }
    // take turns dequeueing until empty
    var nextEdge1;
    var nextEdge2;
    while (!q1.isEmpty() || !q2.isEmpty()) {
      // if has queue, return true
      if (!q1.isEmpty()) {
        nextEdge1 = q1.remove();
        if (nextEdge1 === value2) {
          return true;
        }
        if (visited1[nextEdge1] === undefined) {
          visited1[nextEdge1] = true;
          if(graph.hasNode(nextEdge1)) {
            for (var edge in graph.findEdges(nextEdge1)) {
              q1.add(edge);
            }
          }
        }
      }
      if (!q2.isEmpty()) {
        nextEdge2 = q2.remove();
        if (nextEdge2 === value1) {
          return true;
        }
        if (visited2[nextEdge2] === undefined) {
          visited2[nextEdge2] = true;
          if(graph.hasNode(nextEdge2)) {
            for (var edge in graph.findEdges(nextEdge2)) {
              q2.add(edge);
            }
          }
        }
      }
    }
    // return false
    return false;
  };
  
  /* TEST */
  var graph = new Graph();
  graph.addNode('A');
  graph.addNode('B');
  graph.addNode('C');
  graph.addNode('D');
  graph.addNode('E');
  
  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('B', 'C');
  
  graph.addEdge('D', 'E');
  
  
  console.log(checkRoute('A', 'C', graph), true);
  console.log(checkRoute('A', 'E', graph), false);
  console.log(checkRoute('B', 'A', graph), true);
  console.log(checkRoute('D', 'E', graph), true);