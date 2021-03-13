class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }
    insertAtHead(data) {
        // created a new node // gave it the data value we wanted to store // next value after element is start of list 
        const newNode = new LinkedListNode(data, this.head)
        // replace start of list with new node
        this.head = newNode
        this.length++
    }
}

class LinkedListNode {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

module.exports = LinkedList