// pure function
function addTwoNums(num1, num2) {
  return num1 + num2;
}

// impure function
const donutCounter = 1;
function incrementAndAddToDonutCounter(num1, num2) {
  return ++donutCounter + num1 + num2;
}
// when we invote func on line 7, we are getting different output everytime we call on it
// and we are also incrementing the donut counter and altering the variable
// this is impure

// impure function
function addToDonutCounter(num1, num2) {
  return donutCounter + num1 + num2;
}
// this function is still impure b/c it is ref variable outside the function

const donut = {
  type: "Glazed"
}

// mutates state
function addToppingToDonut(donut, property, value) {
  donut[property] = value;
  return donut;
}

// does not mutate state
function purelyAddToppingToDonut(donut, property, value) {
  // const newDonut = Object.assign({}, donut)
  const newDonut = {...donut};
  newDonut[property] = value;
  return newDonut;
}
