const convertToCelsius = function(fahrenheit) {
  let exactCelsius;
  let roundCelsius;
  exactCelsius = (fahrenheit - 32) * 5/9;
  roundCelsius = Math.round(exactCelsius * 10) / 10;
  return roundCelsius;
};

const convertToFahrenheit = function(celcius) {
  let exactFahrenheit;
  let roundFahrenheit;
  exactFahrenheit = (celcius * (9/5)) + 32;
  roundFahrenheit = Math.round(exactFahrenheit * 10) / 10;
  return roundFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
