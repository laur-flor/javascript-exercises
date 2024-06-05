const fibonacci = function(n) {
    const series = [0, 1];
    if (n < 0) {
        return "OOPS";
    } else {
        for (let i = 2; i <= n; i++) {
            series[i] = series[i-1] + series[i-2];
            console.log(series[n]);
        }
        return series[n];
    }
};


  
  fibonacci(8);

// Do not edit below this line
module.exports = fibonacci;
