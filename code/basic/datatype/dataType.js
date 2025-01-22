const primitiveData = () => {
  console.log(null);
  console.log(undefined);
  console.log("String value");
  console.log(1);
  console.log(true);
}

const nonPrimitiveData = () => {
  console.log(JSON.stringify({ str: 'String value' }));
  console.log(JSON.stringify(['String value']));
}

const stringDataType = () => {
  var str = "My demo string in javascipt code";
  console.log("\n ************* String ***********");
  console.log(str.length);
  console.log(str.toLowerCase());
  console.log(str.toUpperCase());
  console.log(str.indexOf("demo"));
  console.log(str.includes("demo"));
  console.log(str.concat("new string"));
  console.log(str.charAt(0));
  console.log(str.slice(0, 10));
  console.log(str);
  console.log(str.substring(0, 10));
  console.log(str.replace('in', 'with'));
  console.log(str.charCodeAt(0));
  console.log(str.codePointAt(0));
}

const arrayDataType = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  arr.push(7); //[1, 2, 3, 4, 5, 6, 7]
  arr.pop();  //[1, 2, 3, 4, 5, 6]
  console.log(arr.length); //6
  console.log(arr.find((x) => x === 1));
  console.log(arr.find((x) => x === 20));
  console.log(arr.every((x) => x < 10));
  console.log(arr.filter((x) => x > 2));
  arr.fill(8);
  console.log(arr);
  const iterator = arr.entries();
  console.log(iterator.next().value);
  console.log(iterator.next().value);
}

const objectDataType = () => {
  const obj = { a: 1, b: 2 };
  const obj2 = { c: 3, d: 4 };
  console.log(Object.keys(obj));
  console.log(Object.values(obj));
  console.log(Object.entries(obj));
  Object.assign(obj, obj2);
  const person = {
    a: 1,
  };
  const man = Object.create(person, {
  });
  man.firstname = 2;
  console.log(man);
  const object1 = {};

  Object.defineProperty(object1, 'property1', {
    value: 42,
    writable: false,
  });
  
  // Throws an error in strict mode
  
  console.log(JSON.stringify(object1));
  const object2 = {};

  Object.defineProperties(object2, {
    demo1: {
      value: "demo1",
      writable: false
    },
    demo2: {
      value: "demo2",
      writable: false
    }
  });
  const object4 = {
  a: 1,
  b: 2,
  c: 3
  };
  console.log(Object.entries(object4));
  console.log(Object.keys(object4));
  console.log(Object.values(object4));
  const map = new Map([['d', 1], ['e', 2], ['f', 3]]);
  const object5 = Object.fromEntries(map);
  console.log(Object.getOwnPropertyDescriptor(object5, 'd'));
  console.log(Object.getOwnPropertyDescriptors(object5));
  console.log(Object.getOwnPropertyNames(object5));
  const object6 = {};
  const xy = Symbol('a'); //local
  const yz = Symbol.for('b'); //global
  object6[xy] = 'a'; 
  object6[yz] = 'b'; 
  console.log(Object.getOwnPropertySymbols(object6));
  const newObject6 = Object.getPrototypeOf(object5);
  console.log(newObject6 === object5);
  const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
  ];
  const result = Object.groupBy(inventory, ({ type }) => type);
  console.log(result);
  const object8 = {
    prop: 'exists',
  };
  console.log(Object.hasOwn(object8, 'prop'));
  console.log(Object.is('1', 1));
  Object.preventExtensions(object8);
  console.log(Object.isExtensible(object8));
};

primitiveData();
nonPrimitiveData();
stringDataType();
arrayDataType();
objectDataType();