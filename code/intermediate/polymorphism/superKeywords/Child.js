class Parent {
  constructor() {
    console.log('Parent constructor called');
  }
  getMessage() {
    console.log('Message from parent');
  }
}

class Child extends Parent {
  constructor() {
    super();
    console.log('Child constructor called');
  }
  getMessage() {
    super.getMessage();
    console.log('Message from child');
  }
}

var child = new Child();
child.getMessage();