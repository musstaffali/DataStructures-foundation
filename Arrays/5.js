/**
CTCI - 1.5

One Away:

There are three types of edits that can be preformed on string:
- insert a character,
- remove a character,
- or replace a character,
Given two strings, write a function to check if they are
one edit (or zero edits) away.

EXAMPLE
pale, ple -> true
pales, pale -> true
pale bale -> true
pale, bake -> false
abbbc, abc
ple, pale

Input: 2 strings
Output:  boolean
Constraints: optimize
Edge cases: empty string,

time complexity:
space complexity:
 */

let oneAway = () => {

}


console.log(
    oneAway('pale', 'ple') === true,
    oneAway('pales', 'pale') === true,
    oneAway('pale', 'bale') === true,
    oneAway('pale', 'bake') === false,
    oneAway('p', '') === true,
    oneAway('', 'bake') === false,
    oneAway('pr', 'r') === true,
    oneAway('pr', 'rp') === false,
    oneAway('brrr', 'brrss') === false,
    oneAway('abc', 'acs') === false,
    oneAway('aple', 'aple') === true
)