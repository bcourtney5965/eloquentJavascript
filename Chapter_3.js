// 1.) Minimum
function minimum(a, b) {
    if (a > b) {
        return b;
    } else if (a < b) {
        return a;
    } else {
        return "Please provide two different numbers.";
    }
}

// 2.) Recursion
function isEven(a) {
    if (a === 0) {
        return true;
    } else if (a === 1) {
        return false;
    } else if (a < 0) {
        return isEven(Math.abs(a));
    } else {
        return isEven(a - 2);
    }
}

// 3.) Bean Counting
var string = "BBC";  // -> 2
function countBs(str) {
    var counter = 0, i;
    for (i = 0; i < str.length; i += 1) {
        if (str[i] === "B") {
            counter += 1;
        }
    }
    return counter;
}
// Count Char & rewritting countBs.
var string = "BBC";
function countChars(str, ch) {
    var counter = 0, i;
    for (i = 0; i < str.length; i += 1) {
        if (str[i] === ch) {
            counter += 1;
        }
    }
    return counter;
}
// countBs rewritten to take advantage of countChars
function countBs(str) {
    return countChars(str, "B");
}