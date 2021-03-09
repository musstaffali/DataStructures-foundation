/** * CTCI - 1.1

    Is Unique: Implement an algorithm to determine if a string has all unique characters. 
    What if you cannot use additional data structures.

Input: string
Output: boolean (aka true/false)
Constraints: no additional data structures, optimize
Edge cases: empty string
*/

// time complexity: linear - O(n)
// space complexity: linear - O(n)

let isUnique = (s) => {
    // check each character and store it in a hash table
    // if we find that the character is already there, return false
    // when done checking, return true
    let hash = {};

    for (let i = 0; i < s.length; i++) {
        // traversing a string that comes through
        let c = s[i];
        // looking at every character to see if it exist in our hash
        if (hash[c]) {
            // if c is found in hash it will return false
            return false;
        } else {
            // otherwise it will store it in hash by setting to true
            hash[c] = true;
        }
    }

    return true;
};

console.log(isUnique('s') === true);
console.log(isUnique('') === true);
console.log(isUnique('ss') === false);
console.log(isUnique('stories') === false);
console.log(isUnique('rainbow') === true);
console.log(isUnique('chirpingmermaid') === false);




/**  Solution 2

 str --> object --> count the values in the object */

const IsUnique = (str)=>{
    const obj = {};
for(let i of str)
    (!obj[i])?obj[i]=1:obj[i]++
for(let i in obj)
{
    if(obj[i]>1)
        return false;
}
    return obj;
}

console.log({
    IsUnique: IsUnique("babacademy")
})