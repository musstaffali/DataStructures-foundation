/**
CTCI - 2.3
Implment an algorithm to delete a node in the middle 
(i.e., any node but the first and the last node, not necessarily the exact middle) 
of a singly linked list, given only access to that node.

Hint:
#72 - Picture the list 1 -> 5 -> 9 -> 12. Removing 9 would make it look like 1 -> 5 -> 12. 
You only have access to the 9 node.
Can you make it look like the correct answer?
    
Input:
Output: 
Constraints: 
Edge cases: 

time complexity: Binary Search O(log n)
space complexity: 
 */


var LinkedList = function(value) {
    this.value = value;
    this.next = null;
  };
  
  var deleteMidNode = function(midNode) {
    var node = midNode;
    while (node !== null && node.next !== null) {
      node.value = node.next.value;
      if (node.next.next === null) {
        node.next = null;
      } 
      node = node.next;
    }
  };
  
  // a -> b -> c -> d -> e -> f, input c
  // a -> b -> *d -> d -> e -> f
  // a -> b -> d -> *e -> e -> f
  // a -> b -> d -> e -> *f -> f
  // a -> b -> d -> e -> f -> *null
  
  /* TEST */
  
  var printList = function(head) {
    while(head !== null) {
      console.log(head.value);
      head = head.next;
    }
    console.log('done printing');
  };
  
  var a = new LinkedList('a');
  var b = new LinkedList('b');
  var c = new LinkedList('c');
  var d = new LinkedList('d');
  var e = new LinkedList('e');
  var f = new LinkedList('f');
  
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  e.next = f;
  
  printList(a);
  deleteMidNode(c);
  printList(a);