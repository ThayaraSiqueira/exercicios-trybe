const bmi = (height, weight) => {
    return (weight / (Math.pow(height, 2))).toFixed(2);
}

module.exports = bmi;