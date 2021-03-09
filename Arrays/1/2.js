/** * CTCI - 1.2

    CHECK PERMUTATION 
    (permuatation - a way, especially one of several possible variations, in which a set or number of things can be ordered or arranged.)
    Given two strings, write a method to decide of one is a permutation of the other. 

Input: 2 strings
Output: boolean (aka tru/false)
Constraints: optimize 
Edge cases: empty string or diff length
*/

// time complexity: 
// space complexity: 

let checkPerm = (s1, s2) => {
    // if two strings have diff lengths, automatically return false
    // one way: sort both strings and comapre -- O(n log n)
    // to optimize, we can make a map of one string, and check the second string


    let hash = {};
// !== will return true if the operands are not equal and/or not of the same type.
    if (s1.length !== s2.length) {
        return false;
    }

// Traverse the first string and fill up hash table
    for (let i = 0; i < s1.length; i ++) {
        let c = s1[i];
        if (hash[c]) {
            hash[c]++;
        } else {
            hash[c] = 1;
        }
    }
    for (let i = 0; i < s2.length; i++) {
        let c = s2[i];
        if (hash[c] && hash[c] !== 0) {
            hash[c]--;
        } else {
            return false;
        }
    }
};

console.log(
    checkPerm('', '') === true,
    checkPerm('so', 'os') === true,
    checkPerm('sos', 'os') === false,
    checkPerm('abc', 'abz') === false,
    checkPerm('restful', 'fluster') === true,
    checkPerm('baab', 'bbba') === false
);