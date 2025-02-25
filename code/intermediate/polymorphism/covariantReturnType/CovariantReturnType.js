function A() { }
A.prototype.get = function () {
    return this; //this refers to A constructor
}

function B() { }

B.prototype = Object.create(A.prototype);
B.prototype.constructor = B;
B.prototype.get = function () {
    return this; //this refers to B constructor
}

B.prototype.getMessage = function () {
    console.log("welcome to covariant return type");
}

const b = new B();
b.get().getMessage();
