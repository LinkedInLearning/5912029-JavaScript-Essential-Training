const myArray = [100, 20, 55, 36, 123];

/*
myArray.forEach((element, index, array) => {
  console.log(element, index, array);
  array[index] = 0;
});
console.log(myArray);
*/

const newArray = myArray.map((element, index, array) => {
  return element * 10;
});
console.log(myArray);
console.log(newArray);
