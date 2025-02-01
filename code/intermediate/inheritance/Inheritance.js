function Parent() {
    console.log('Parent constructor called with context', this);
}

Parent.prototype.printName = function () {
    console.log('Parent printName', this.name);
}

function Child(name, age) {
    Parent.call({ name });
    this.age = age;
    this.name = name;
    console.log('Child constructor called with context', this);
}

Child.prototype = Object.create(Parent.prototype);
Child.constructor = Child;
Child.prototype.printAge = function () {
    console.log(this.age);
}
Child.prototype.printName = function () {
    console.log('Child printName', this.name);
}
const childObj = new Child('Avinash', 12);
childObj.printAge();
childObj.printName();