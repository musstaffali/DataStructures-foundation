// String Rotation with subString
// hello    /lohel
// str2 is rotation of str1 or not 


var string = "foo";
    substring = "oo";
string.indexOf(substring) !== -1;

function isRotation(str1,str2){
    if(str1.length !== str2.length ){
        return false;
    }
    var str1Twise = str1+ str1; //lo'hello'hel

    return str1Twise.indexOf(substring) !== -1
}