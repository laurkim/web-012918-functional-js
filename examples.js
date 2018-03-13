// pure function
function addTwoNums(num1, num2) {
  return num1 + num2;
}

// impure function
const donutCounter = 1;
function incrementAndAddToDonutCounter(num1, num2) {
  return ++donutCounter + num1 + num2;
}

// impure function
function addToDonutCounter(num1, num2) {
  return donutCounter + num1 + num2;
}

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

// Higher Order Function that returns another function using partial application
function multiplyBy(multiplier) {
  return function(num) {
    return multiplier * num;
  }
}
// multiplyBy(2)(10);
// const double = multiplyBy(2);
// double(100);

// Functional Composition
function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

// add(multiply(4, 5), 2);
// const multiplied = multiply(4, 5);
// add(multiplied, 2);

// Using Compose
function doubleString(string) {
  return string + string;
}

function capitalizeString(string) {
  return string.toUpperCase();
}

doubleString(capitalizeString("hello"));

function compose(...fns) {
  return function(result) {
    for (let i = fns.length - 1; i > -1; i--) {
      result = fns[i]result;
    }
    return result;
  }
}

compose(doubleString, capitalizeString)("hello");
const formatStringWithCompose = compose(doubleString, capitalizeString);
formatStringWithCompose("hello");

// anonymous functions
const adder = function (num1, num2) {
  return num1 + num2
};

// immediately invoked function expression (IIFE)
(function (num1, num2) { return num1 + num2 })(2, 3)
