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

primitiveData();
nonPrimitiveData();