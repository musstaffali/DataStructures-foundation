/** 
CTCI - 1.3

URLify

Write  a method to replace all spaces in a string with '%20'.
You may assume that the string gas sufficient space at the end to hold additional characters,
and that you are given the 'true' length of the string.


Input: string, number
Output: string
Constraints: optimize 
Edge cases: empty string, space in front, middle and end


time complexity:
space complexity:
 */

let URLify = (s, n = s.length) => {
// first pass: count the number of non space characters in the string
//subtract chars from true length n to see how many spaces we are allowed to raplace wit %20

//second pass:
//if we see space and there all still spaces left, append '%20' to output string
//otherwise copy current character
//when we run out spaces, append empty string instead

let out = '';
let chars = 0;

for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (c !== ' ') {
        chars++;
        }
    }

    let spaces = n - chars;

    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (c === ' ' && spaces > 0) {
            out += '%20';
            spaces--;
        } else if (c !== ' ') {
            out += c;
        }
    }
    //if n is not yet reached and there are still spaces left while 
    while (spaces > 0) {
        out += '%20';
        spaces--;
    }

    return out;
};

console.log(
    URLify('Mr John Smith ', 13) === 'Mr%20John%20Smith',
    URLify('Mr John Smith ', 14) === 'Mr%20John%20Smith%20',
    URLify('   hi', 7) === '%20%20%20hi%20%20',
    URLify('   hi ', 3) === '%20hi',
    URLify('', 0) === '',
)

