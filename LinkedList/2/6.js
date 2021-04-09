/**
CTCI - 2.6


Hint:
#7 - Of course you could convert the linked list to integers, compute the sum, and then
convert it back to a new linked list. If you did this in an interview, your interviewer 
would likely accept the answer, and then see if you could do it without converting it to
a number and back.

#30 - Try recursion. Suppose you have 2 lists. A = 1->5->9(represent 951)and 
B = 2->3->6=>7 (representing 7632), and a function that operates on remainders of the list
(5 -> 9 and 3 -> 6 -> 7). Could this be used to create the sum method? What is the
relationship between sum(1 -> 5 -> 9, 2 -> 3 -> 6 -< 7) and sum (5 -> 9, 3 -> 6 -> 7)?

#7 - Make sure you have considered linked lists that are not the same length.

#95 - Does you algorithm work on linked lists like 9 -> 7 -> 8 and 6 -> 8 -> 6?
Double cbeck that.

    
Input:
Output: 
Constraints: 
Edge cases: 

time complexity: 
space complexity: 
 */

// If doubly - move to middle, and then extend front and back to check
// If singly - make a reversed linkedlist from the first half

var LinkedList = require('./../util/LinkedList');

var palindrome = function(head) {
  var mid = head;
  var end = head;
  var isEven = true;
  var firstHalf = null;
  var frontNode = null;

  while (end.next !== null) {
    isEven = true;
    if (firstHalf === null) {
      firstHalf = new LinkedList(mid.value);
    } else {
      frontNode = firstHalf;
      firstHalf = new LinkedList(mid.value);
      firstHalf.next = frontNode;
    }
    mid = mid.next;
    end = end.next;
    if (end.next !== null) {
      end = end.next;
      isEven = false;
    }
  }

  if (!isEven) {
    mid = mid.next;
  }

  while(mid !== null) {
    // console.log(mid.value, firstHalf.value);
    if (mid.value !== firstHalf.value) {
      return false;
    }
    mid = mid.next;
    if (firstHalf!== null) {
      firstHalf = firstHalf.next;
    }
  }
  return true;

};

/* TEST */

var a = new LinkedList('a');
var b = new LinkedList('b');
var c = new LinkedList('c');
var d = new LinkedList('d');
var e = new LinkedList('c');
var f = new LinkedList('b');
var g = new LinkedList('a');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

console.log(palindrome(a));
