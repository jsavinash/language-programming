function JavascriptFunctionalConstructor() {
    this.name = "String"; //Data
    this.printName = function () { //Action or behaviours
        return this.name;
    }
}

var obj = new JavascriptFunctionalConstructor(); //Object
console.log(obj.printName());