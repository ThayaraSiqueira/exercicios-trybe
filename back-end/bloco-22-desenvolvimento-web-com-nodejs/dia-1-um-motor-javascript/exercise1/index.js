const readlineSync = require('readline-sync');
const bmi = require('./bmi');

const askName = () => {
    return readlineSync.question('What\'s your name?');
}


const askHeight = () => {
    return readlineSync.questionFloat('What\'s your height?');
}


const askWeight = () => {
    return readlineSync.questionFloat('What\'s your weight?');
}

const name = askName();
const height = askHeight();
const weight = askWeight();

const result = bmi(height, weight);

console.log(`Hi, ${name}! Currently, your BMI is ${result}`);