/**
CTCI - 2.4
Patition: Write code tot partition a linked list around a value x, 
such that all nodes less than x come before all nodes greater than or equal to x
(Important: The patition element x can appear anywhere in the "right partition";
it does not need to appear between left and right partitions the additional spacing 
the example below indicates the partition.)

Hint:
#3 There are many solutions to this problem, most of which are equally optimal in runtime.
Some have shorter, cleaner code tha others. Can you brainstorm different solutions?

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

 var partition = function(head, partition) {
  // approach is to create left and right threads
  // and attach nodes with values less than partition value to the left
  // and nodes with vallues more than partition value to the right
    var left;
    var right;
    var currLeft = null;
    var currRight = null;

    var node = head;
    while (node !== null) {
        if (node.value < partition) {
            if (currLeft === null) {
                left = node;
                currLeft = left;
            } else {
                currLeft.next = node;
                currLeft = currLeft.next;
            }
        } else {
            if (currRight === null) {
                right = node;
                currRight = right;
            } else {
                currRight.next = node;
                currRight = currRight.next;
            }
        }
        node = node.next;
    }
    currRight.next = null;
    currLeft.next = right; // connect two partition together
    return left; // return head of new linkedList
 };

 /* TESTS */
// Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5]
// Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

var printList = function(a) {
    while (a !== null) {
        console.log(a.value);
        a = a.next;
    }
};

var a = new LinkedList(3);
var b = new LinkedList(5);
var c = new LinkedList(8);
var d = new LinkedList(5);
var e = new LinkedList(10);
var f = new LinkedList(2);
var g = new LinkedList(1);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

var newa = partition(a, 5);
printList(newa);