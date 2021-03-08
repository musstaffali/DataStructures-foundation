// Tranversing a Linked list 

// 5 -> 4 -> 10

const linkedList = {
    val: 5,
    next: {
        val: 3,
        next: {
            val: 10,
            next: null,
            // Null identifies no more items in our linkedList aka finished
        },
    },
};

// [ 5, 3, 10]

const arr = [];
let head = linkedList;

while(head !==null) {
    arr.push(head.val);
    head = head.next;
}

console.log(arr);