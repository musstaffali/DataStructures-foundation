/**
CTCI - 2.1
Write code to remove duplicates from an unsorted linked list.

Iterate through linked list getting one node at a time
Iterate through the rest of the linked list and compare the current node’s value
When duplicate element is found, remove it from the linked list and update the linked list.


Input:
Output: 
Constraints: 
Edge cases: 

time complexity: linear 0(N^2)
space complexity: 
 */

function LinkedList() {
    this.head = null;
  }
  
  LinkedList.prototype.removeDuplicates = function() {
    // Empty or a single element Linked List
    if (!this.head || !this.head.next) {
      console.log('No duplicates were found. Empty or a single element Linked List.');
      return;
    }
  
    var p1;
    var p2;
    var p3;
    var val;
    p2 = this.head;
  
    while (p2) {
      val = p2.data;
      p1 = p2;
      p3 = p1.next;
  
      while (p3) {
        if (p3.data === val) {
            p1.next = p3.next;
        } else {
          p1 = p3;
        }
        p3 = p3.next;
      }
  
      p2 = p2.next;
    }
  };
  
  // Base case : No duplicates
  var L1 = new LinkedList();
  L1.add(5);
  
  L1.removeDuplicates();
  console.log(L1);
  
  // Two nodes with duplicates
  var L2 = new LinkedList();
  L2.add(5);
  L2.add(5);
  
  L2.removeDuplicates();
  console.log(L2);
  
  // Two nodes without duplicates
  var L3 = new LinkedList();
  L3.add(5);
  L3.add(5);
  
  L3.removeDuplicates();
  console.log(L3);
  
  // Remove duplicates at the end
  var L4 = new LinkedList();
  var testData = [5,6,7,8,5];
  testData.forEach(el => L4.add(el));
  
  L4.removeDuplicates();
  console.log(L4);
  
  // Remove multiple duplicates from middle
  var L5 = new LinkedList();
  var testData = [5,6,7,5,5,8];
  testData.forEach(el => L5.add(el));
  
  L5.removeDuplicates();
  console.log(L5);