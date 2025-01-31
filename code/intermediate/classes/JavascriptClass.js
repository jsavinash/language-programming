function javascriptClass() {
    console.log('Javascript Constructor');
    function innerClass() {
        this.name = "Inner class name";
        this.printName = function () {
            console.log(this.name);
        }
    }
    this.name = 'Outer class name';
    this.printName = function () {
        console.log(this.name);
    }
    this.innerclassObj = new innerClass();
}

const outerclassObj = new javascriptClass();
outerclassObj.printName();
outerclassObj.innerclassObj.printName()