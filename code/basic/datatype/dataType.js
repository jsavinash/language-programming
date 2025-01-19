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
  arr.fill(8);
  console.log(arr);
  const iterator = arr.entries();
  console.log(iterator.next().value);
  console.log(iterator.next().value);
}

primitiveData();
nonPrimitiveData();
stringDataType();
arrayDataType();