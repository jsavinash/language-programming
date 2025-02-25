function Parent() {}

Parent.prototype.printName = function () {
    console.log('Parent print info');
}
function Child() {}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
Child.prototype.printName = function () {
    console.log('Child print info');
}

const child = new Child();
child.printName();