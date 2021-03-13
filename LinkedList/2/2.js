/**
CTCI - 2.2
Implment an algorithm to find the kth to last element of singly linked list.

Hint:
#8 - What if you knew the linked list size? What is the difference between finding the Kth-to-last element and finding rhe Xth element.
#25 - If you don't know the linked list size, can you compute it? How does this impact the runtime?
#41 - Try implementing it recursively. If you could find the (K - 1)th to last element, can you find the Kth element?
#67 - You might find it useful to return multiple values. Some languages don't directly support this, but there are workarounds in essentially any language. What are some of those workarounds?
#126 - Can you do it iteratively? Imagine if you had two pointers pointing to adjacent nodes and they were moving at the same speed through the linked list. When one hits the end of linked list, where will the other be?
    
Input:
Output: 
Constraints: 
Edge cases: 

time complexity: linear 0(N^2)
space complexity: 
 */

function getKthLastElement(head, k) {
    if (!head || k < 1) {
      return undefined;
    }
  
    var current = head;
    var nBehindCurrent = head;
  
    for (var i = 0; i < k - 1; i++) {
      current = current.next;
      if (!current) {
        return undefined;
      }
    }
  
    while (typeof current.next !== 'undefined') {
      nBehindCurrent = nBehindCurrent.next;
      current = current.next;
    }
  
    return nBehindCurrent;
  }
  
  /**
   * Creates a singly linked list node.
   *
   * @constructor
   * @param {Object} data The data associated with this node.
   * @param {SinglyLinkedList} next The next node in the linked list.
   */
  function SinglyLinkedList(data, next) {
    this.data = data;
    this.next = next;
  }