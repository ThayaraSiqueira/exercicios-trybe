let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lowerNumber = 100

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < lowerNumber) {
     lowerNumber = numbers[index];
  } 
}

console.log(lowerNumber);