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

// Higher Order Function that takes another function as an parameter
function filter(array, callback) {
  const evensArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      evensArray.push(array[i]);
    }
  }
  return evensArray;
}

function isEven(num) {
  return num % 2 === 0
}

// Higher Order Function that returns another function
// Partial application b/c we have some of the information but we're calling the function in parts 
function multiplyBy(multiplier) {
  return function(num) {
    return multiplier * num;
  }
}
// can be invoked as multiplyBy(2)(10) or
// const double = multiplyBy(2)
// double(100)
