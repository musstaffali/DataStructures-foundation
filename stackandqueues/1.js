/**
CTCI - 3.1
Three In One:
Describe how you could use a single array
    to implement three stacks.


Hint
#2 
A stack is simply a data structure in which the most
recently added elements are removed first. 
Can you simulate a single stack using an array? 
Remember that there are many possible solutions, and
there are tradeoffs of each.

#12
We could simulate three stacks in an array by just 
allocating the first third of the array to the
first stack.
One might actually be much bigger than the others, thought.
Can we be more flexible with the division.

#38
If you want to allow for flexible  divisions, 
you can shift stacks around.
Can you ensure that all availble capacity is used?

#58
Try thinking about the arrat as circular, such that the end
of the array "wraps around" to the start of thw array.


Input:
Output: 
Constraints: 
Edge cases: 

time complexity: linear 0(N^2)
space complexity: 
 */

var ThreeInOne = function() {
    this.container = [];
    this.middleBottom = 0;
    this.middleTop = 0;
};

ThreeInOne.prototype.push1 = function(value) {
    this.container.unshift(value);
    this.middleBottom++;
    this.middleTop++;
};

ThreeInOne.prototype.push2 = function(value) {
    this.container.splice(this.middleTop, 0, value);
    this.middleTop++;
};

ThreeInOne.prototype.push3 = function(value) {
    this.container.push(value);
};

ThreeInOne.prototype.pop1 = function() {
    if (this.isEmpty1()) {
        return undefined;
    }
    var answer = this.container.shift();
    if (this.middleBottom > 0) {
        this.middleBottom--;
        this.middleTop--;
    }
    return answer;
};
