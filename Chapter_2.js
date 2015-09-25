// 1.) Looping a triangle
for (var text = ""; text.length <= 7; text += "#") {
    console.log(text);
}

// 2.)
// FizzBuzz - first part
for (var n = 1; n <= 100; n += 1) {
    if (n % 3 === 0) {
        console.log("Fizz");
    } else if (n % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(n);
    }
}
// FizzBuzz - second part
for (var n = 1; n <= 100; n++) {
    var msg = "";
    if (n % 3 === 0) {msg += "Fizz"};
    if (n % 5 === 0) {msg += "Buzz"};
    msg = msg || n;
    console.log(msg);
}

// 3.) ChessBoard
var x, y, string = "";
var size = +prompt("What size do you want?");
for (y = 0; y < size; y += 1) {
    for (x = 0; x < size; x += 1) {
        if ((x + y) % 2 === 0) {
            string += "#";
        }
        if ((x + y) % 2 === 1) {
            string += " ";
        }
    }
    string += "\n";
}
console.log(string);