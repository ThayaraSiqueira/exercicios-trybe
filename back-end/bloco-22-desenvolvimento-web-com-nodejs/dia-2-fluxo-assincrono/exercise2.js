// - Generate a random number from 1 to 100 for each parameter that the function receives
// Call the function from the previous exercise, passing the three random numbers as parameters
// Use `then` and `catch` to manipulate the Promise returned by the function:
// 1. If the Promise is rejected, write the reason for rejection on the screen.
// 2. If the Promise is resolved, write the result of the calculation on the screen.

const doMath = require('./exercise1');

const a = Math.floor(Math.random() * 100 + 1)
const b = Math.floor(Math.random() * 100 + 1)
const c = Math.floor(Math.random() * 100 + 1)

doMath(a,b,c)
  .then((result) => console.log(result))
  .catch((err) => console.error(err.message));
