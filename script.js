function firstLast6(array) {
        var a = array.indexOf(6);
        var b = array.lastIndexOf(6);
        var c = array.length-1;
        if (b == c || a == 0) {
            return true;
        } else {
            return false;
        }

}
function has23(array) {
    if ( array.indexOf(2) >= 0 || array.indexOf(3) >= 0){
        return true;
    } else {
        return false;
    }
}
function fix23(array){
    var one = array.lastIndexOf(2);
    var two = array.indexOf(3);
    if(two - one == 1){
        array.splice(two, 1, 0);
        return array;
    }else{
        return array;
    }
}
function countYZ(string){
    var quantity = 0;
    var str1 = string.toLowerCase();
    for(var i=0; i < string.length; i++){
        var whatIsThere = str1.charAt(i);
        var whatIsThereNext = str1.charAt(i-1);
        if (whatIsThere === " "){
            if ((whatIsThereNext === "y") || (whatIsThereNext === "z" )){
                quantity += 1;
            }
        }
    }
    if (str1.endsWith("z") || str1.endsWith("y")){
        quantity += 1;
    }
    return quantity;
}
function endOther(string1, string2) {
    var str1 = string1.toLowerCase();
    var str2 = string2.toLowerCase();
    if (str1.endsWith(str2)){
        return true;
    } else if (str2.endsWith(str1)){
        return true;
    } else{
        return false;
    }
}
function starOut(string) {
    var newWord = "";
    for (var i = 0; i < string.length; i++) {
        var oneBeforeI = string[i-1];
        var atI = string[i];
        var oneAfterI = string[i+1];
        if ((oneBeforeI !== "*") && (atI !== "*") && (oneAfterI !== "*")) {
            newWord += string[i];
        }
    }
    return newWord;
}
function getSandwich(string) {
    var locationOfFirstBread = string.search("bread");
    var lastLocationOfBread = string.lastIndexOf("bread");
    var theAnswer = string
    if(string.includes("bread")){
        var theAnswer = string.slice(locationOfFirstBread + 5, lastLocationOfBread);
    return theAnswer;
    } else {
        return '';
    }
}
function canBalance(array) {
    for (var i = 0; i < array.length; i++) {
        var leftSide = array.slice(0, i + 1);
        var rightSide = array.slice(i + 1, array.length);
        var valueOfLeftSide = 0;
        var valueOfRightSide = 0;
        for (var a = 0; a < leftSide.length; a++) {
            valueOfLeftSide += leftSide[a];
        }
        for (var a = 0; a < rightSide.length; a++) {
            valueOfRightSide += rightSide[a];
        }
        if (valueOfLeftSide == valueOfRightSide) {
            return true;
        }

    }
    return false;
}
function countClumps(array) {
    var clumps = 0;
    var mistake = 0;
    for (var i = 0; i < array.length - 1; i++) {
        var theOne = array[i];
        var theOneAfter = array[i + 1];
        if (theOneAfter == theOne) {
            clumps += 1;
            if (theOneAfter == array[i + 2]) {
                mistake += 1;
                }
            }
        }
        return clumps - mistake;

}
function evenlySpaced(x,y,z){
    if(x == y && y == z && x == z){
        return true;
    }
if (x > y && x > z){
    var largeNumber = x;
    if( y > z){
        mediumNumber =  y;
        smallNumber = z;
    } else{
        mediumNumber = z;
        smallNumber = y;
    }
}
    if (z > x && z > y){
        var largeNumber = z;
        if( x > y){
            mediumNumber =  x;
            smallNumber = y;
        } else{
            mediumNumber = y;
            smallNumber = x;
        }
    }
    if (y > x && y > z){
        var largeNumber = y;
        if( x > z){
            mediumNumber =  x;
            smallNumber = z;
        } else{
            mediumNumber = z;
            smallNumber = x;
        }
    }
    if(largeNumber - mediumNumber == mediumNumber - smallNumber){
        return true;
    } else{
        return false;
    }

}

function tester() {

  //document.getElementById("output").innerHTML = canBalance([1,2,2,1]);
  //document.getElementById("output").innerHTML = canBalance([3,1,1,1])

}

