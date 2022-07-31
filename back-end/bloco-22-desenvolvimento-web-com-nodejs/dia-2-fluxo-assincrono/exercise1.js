// Create a function that receives three parameters and return a promise
// If one of the parameters is not a number, reject the Promise
// If the parameters are all numbers, add the first two and multiply the result by the third one (`(a + b) * c`)
// If the result is lower than 50, reject the Promise
// If the result is higher than 50, resolve the Promise with the result

function doMath(a, b, c) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
            return reject(new Error('Type numbers only')); 
    };
    const result = (a + b) * c;

    if (result < 50) {
      return reject(new Error('Result is too low'));
    }

    resolve(result);
  });
}
