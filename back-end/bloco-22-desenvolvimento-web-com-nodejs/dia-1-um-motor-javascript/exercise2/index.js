const readlineSync = require('readline-sync');
const velocity = require('./averageSpeed');

const askDistance = () => {
    return readlineSync.questionFloat('What was the distance?');
}

const askTime = () => {
    return readlineSync.questionFloat('How much time did you spend on it?');
}

const dst = askDistance();
const time = askTime();
const result = velocity(dst, time);

console.log(`The velocity was ${result}`);