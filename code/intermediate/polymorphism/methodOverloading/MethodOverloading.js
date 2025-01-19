function printName() {
    if (arguments.length === 1) {
        console.log("Name :-", arguments[0]);
    } else if (arguments.length === 2) {
        console.log("Name :-", arguments[0], "Age", arguments[1]);
    } else if (arguments.length === 3) {
        console.log("Name :-", arguments[0], "Age", arguments[1], 'Height', arguments[2]);
    } else {
        throw Error("Invalid number of arguments");
    }
}

printName('Avinash');
printName('Avinash', 23);
printName('Avinash', 23, 5.6);