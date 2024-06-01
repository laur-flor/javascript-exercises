const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce(((acc, currentVal) => acc + currentVal), 0);
};

const multiply = function(array) {
  return array.reduce(((acc, curr) => acc * curr), 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
	let factorialTotal = 1;
  if (n == 0) {
    return factorialTotal;
  } else {
    for (let i = n; i > 0; i--) {
      factorialTotal *= i;
    }
    return factorialTotal;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
