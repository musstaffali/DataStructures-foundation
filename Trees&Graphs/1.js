/** 
 CTCI - 4.1

Route Between Nodes


 Given a directed graph and two nodes (S and E),
 design an algorithm to find out whether there is a route from S to E. 

 EXAMPLE 
 Input: 
 Output: 

Input: String
Output:  Boolean
Constraints: Optimize
Edge cases: empty strinf, spaces between and in front and end, more than 2 of the same char, even and odd char
 */

class Node {
    constructor(val){
      this.val = val;
      this.children = [];
    }
  }
  
  let Rob = new Node('Rob')
  let kate = new Node("Kate")
  let dave = new Node('Dave')
  let dan = new Node("dan")
  Rob.children = [dave, kate, dan]
  let dog = new Node("dog")
  kate.children.push(dog)
  
  class LinkedList{
    constructor(){
      this.head = null;
    }
    add(node){
      let currentHead = this.head
      if (!currentHead) this.head = node;
      else {
        while(currentHead.next) {
          currentHead = currentHead.next
        }
        currentHead.next = node;
      }
    }
    popHead(){
      let temp = this.head;
      this.head = this.head.next
      return temp;
    }
  }
  
  class LLNode{
    constructor(val){
      this.val = val;
      this.next = null;
    }
  }
  
  //Breadth-First Search
  function searchNode(root, destination){
    let queue = new LinkedList();
    queue.add(new LLNode(root))
    while (queue.head){
      root.children.forEach(child => {
        queue.add(new LLNode(child))
      })
      let temp = queue.popHead();
      if (temp.val===destination) return true;
      else root.val = temp  
    }
    return false;
  }
  
  searchNode(kate, dog)