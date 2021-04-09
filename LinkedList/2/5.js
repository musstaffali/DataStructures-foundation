/**
CTCI - 2.5
You are given two numbers where each number is represented by a linked list. Each node contains a single 
digit of the number and the digits are stored in reverse order, 
such that the 1's digit is at the head.

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

 // Solution


var sumList = function(head1, head2) {

    var node1 = head1;
    var node2 = head2;
    var node3 = null;
    var head3 = null;

    var ones;
    var tens = 0;
    var sum;

    while (node1 !== null && node2 !== null) {
        if (node1 == null) {
            sum = node2.value;
        } else if (node2 === null) {
            sum = node1.value;
        } else {
            sum = node1.value + node2.value;
        }

        sum += tens;
        ones = sum % 10;
        if (node3 === null) {
            head3 = new LinkedList(ones);
            node3 = head3;
        } else {
            node3.next = new LinkedList(ones);
            node3 = node3.next;
        }

        tens = Math.floor(sum / 10);

        if (node1 !== null) {
            node1 = node1.next;
        }

        if (node2 !== null) {
            node2 = node2.next;
        }

        if (tens > 0) {
            node3.next = new LinkedList(tens);
            node3 = node3.next;
        }

        return head3;
    };

    /* Test */

    // Input: (7 -> 1 -> 6) + 
    //        (5 -> 9 -> 2). this case refers tp 617 + 295
    // Output: 2 -> 1 -> 9. the answers refers to 912

    var a = new LinkedList(7);
    var b = new LinkedList(1);
    var c = new LinkedList(6);

    a.next = b;
    b.next = c;

    var d = new LinkedList(5);
    var e = new LinkedList(9);
    var f = new LinkedList(2);

    d.next = e;
    e.next = f;

    var newHead = sumList(a, d);

    printList (newHead);

     // Input: (7 -> 1 -> 6) + (5 -> 9 -> 9). this case refers to 617 + 995
     // Output: 2 -> 1 -> 9. the answer refers to 1612

    var a = new LinkedList(7);
    var b = new LinkedList(1);
    var c = new LinkedList(6);

    a.next = b;
    b.next = c;

    var d = new LinkedList(5);
    var e = new LinkedList(9);
    var f = new LinkedList(2);

    d.next = e;
    e.next = f;

    var newHead = sumList(a, d);

    printList(newHead);
    }
