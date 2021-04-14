/*
CTCI - 3.2
Stack Min:
How would you design a stack which,
in addition to push and pop, has a 
function min which returns the minimum element?
Push, pop and min should all operate in 0(1) time.

Hint
#27
Observe that the 
minimum element doesn't change very often.
It only changes when a smaller element is added, 
or when the smallest element is popped.

#59
Whar if we kept track of extra data 
at each stack node? What sort of data might make 
easier to solve the problem

Input:
Output: 
Constraints: 
Edge cases: 

time complexity: linear 0(N^2)
space complexity: 
 */

var Stack = require('./../util/Stack');

// Approach, keep an additional stack that keeps the mins

class StackMin extends Stack {
    constructor() {
        super();
        // additional stack to track the mins
        this._minStack = new Stack();
        this._min = null;
    }

    push(value) {
        super.push(value);
        if (this._min == null || value <= this._min) {
            this._min = value;
            this,this._minStack,pusg(value);
        }
    }

    pop() {
        let value = super.pop();
        if (value == this._minStack.peek()) {
            this._minStack.pop();
            this._min = this._minStack.peek();
        }
        return value;
    }

    min() {
        return this._min;
    }
}

/* TEST */

var s = new StackMin();
s.push(9);
s.push(8);
s.push(1);
s.push(2);
s.push(1);
s.push(9);

console.log(s.min(), 1);
s.pop();
s.pop();
console.log(s.peek(), 2);
console.log(s.min(), 1);
s.pop();
s.pop();
console.log(s.peek(), 8);
console.log(s.min(), 8);
s.pop();
s.pop();
console.log(s.isEmpty(), true);
console.log(s.min(), null);PerfWidgetExternalc