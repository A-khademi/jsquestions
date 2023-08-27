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
  ///////////////////////////////////////////
function sumFromTo(start, end) {
  if (start === end) {
    return start;
  }
  
  return start + sumFromTo(start + 1, end);
}
////////////////////////////////////////////
function callOnceAfter(func, time) {
  let isScheduled = false;
  let lastCallTime = null;

  function scheduleCall() {
    isScheduled = true;
    setTimeout(function () {
      if (isScheduled && Date.now() - lastCallTime >= time * 1000) {
        func();
        isScheduled = false;
      }
    }, time * 1000);
  }

  return function () {
    lastCallTime = Date.now();
    scheduleCall();
  };
}

function logName() {
}

const lazyLogName = callOnceAfter(logName, 2);
/////////////////////////////////////////////
function limitCallForEveryDuration(func, durationInSeconds) {
  let lastCallTime = 0;
  let isScheduled = false;

  function scheduleCall() {
    isScheduled = true;
    setTimeout(function () {
      if (isScheduled) {
        func();
        lastCallTime = Date.now();
        isScheduled = false;
      }
    }, durationInSeconds * 1000);
  }

  return function () {
    const currentTime = Date.now();
    const elapsedTime = currentTime - lastCallTime;

    if (elapsedTime >= durationInSeconds * 1000) {
      func();
      lastCallTime = currentTime;
    } else {
      if (!isScheduled) {
        scheduleCall();
      }
    }
  };
}

function logName() {}

const limitedLogName = limitCallForEveryDuration(logName, 0.5);

for (let i = 0; i < 10000; i++) {
  limitedLogName();
}
/////////////////////////////////////////////////////////
function rememberOrDo(func) {
  const memory = new Map();

  return function (...args) {
    const argsKey = JSON.stringify(args);

    if (memory.has(argsKey)) {
      return memory.get(argsKey);
    } else {
      const result = func(...args);
      memory.set(argsKey, result);
      return result;
    }
  };
}

function slowSum(a, b) {
  return a + b;
}

const fastSum = rememberOrDo(slowSum);
////////////////////////////////////////////////////////
