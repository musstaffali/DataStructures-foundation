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

class QueueNode {

    constructor( data ) {
        this.data = data
        this.next = null
    }

}

class Queue {

    constructor() {
        this.first = null
        this.last = null
    }

    add( item ) {
        const newNode = new QueueNode( item )
        if ( this.last ) {
            this.last.next = newNode
        } else {
            this.first = newNode
        }
        this.last = newNode
    }

    remove() {
        if ( this.first ) {
            const data = this.first.data
            this.first = this.first.next
            if ( this.first == null ) {
                this.last == null
            }
            return data
        }
        throw Error( 'empty queue' )
    }

    peek() {
        if ( this.first ) {
            return this.first.data
        }
        throw Error( 'empty queue' )
    }

    isEmpty() {
        return this.first === null 
    }

}