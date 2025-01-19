//Global variable declaration
var globalVariable = "Global variable"
function variableFn() {
  //Instance variable declaration
  this.instanceVariable = "Instance variable";
  this.showLocalVariable = function () {
    //Local variable declaration
    var localVariable = "Local Variable";
    return localVariable;
  }
}

//Static variable declaration
variableFn.prototype.staticVariable = "Static variable";

var vb = new variableFn();
console.log(globalVariable);
console.log(vb.instanceVariable);
console.log(vb.showLocalVariable());
console.log(vb.staticVariable);