function calculate(x) {
    return function(y) {
      return function(operator) {
        switch (operator) {
          case '+':
            return x + y;
          case '-':
            return x - y;
          case '*':
            return x * y;
          case '/':
            return x / y;
          default:
            return 'Invalid operator';
        }
      };
    };
  }
  
  console.log(calculate(2)(1)('+')); // 5
  console.log(calculate(2)(2)('-')); // -1
  console.log(calculate(2)(3)('*')); // 6
  console.log(calculate(2)(2)('/')); // 0.666...
  