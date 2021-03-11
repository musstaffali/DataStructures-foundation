/** * CTCI - 1.2

    CHECK PERMUTATION 
    (permuatation - a way, especially one of several possible variations, in which a set or number of things can be ordered or arranged.)
    Given two strings, write a method to decide of one is a permutation of the other. 

Input: 2 strings
Output: boolean (aka tru/false)
Constraints: optimize 
Edge cases: empty string or diff length
*/

// time complexity: O(2n) - linear
// space complexity:  0(n) - linear

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
// forLoop method
    for (let i = 0; i < s1.length; i ++) {
        // let c equal the character
        let c = s1[i];
        // if character is in the hash
        if (hash[c]) {
            // then increase the count by using ++
            hash[c]++;
            // otherwise
        } else {
            // store it as 1
            hash[c] = 1;
        }
    }
    // Loop through second string
    for (let i = 0; i < s2.length; i++) {
        let c = s2[i];
// if c/character is already in our hash and equal c/character is not equal to zero
        if (hash[c] && hash[c] !== 0) {
        // then we will subtract
            hash[c]--;
        } else {
        // otherwise return false
            return false;
        }
    }
};

console.log(
// both string should have the same amount of character and amount of character
    checkPerm('', '') === true,
    checkPerm('so', 'os') === true,
    checkPerm('sos', 'os') === false,
    checkPerm('abc', 'abz') === false,
    checkPerm('restful', 'fluster') === true,
    checkPerm('baab', 'bbba') === false
);