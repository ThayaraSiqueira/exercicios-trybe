// // Ordene o array numbers em ordem crescente e imprima seus valores;
// let sortedNumbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < sortedNumbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (sortedNumbers[index] < sortedNumbers[secondIndex]) {
//         let position = sortedNumbers[index];
//         sortedNumbers[index] = sortedNumbers[secondIndex];
//         sortedNumbers[secondIndex] = position;
//       }
//     }
//   }

//   console.log(sortedNumbers);


// // Ordene o array numbers em ordem decrescente e imprima seus valores;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let descendentNumbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < descendentNumbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (descendentNumbers[index] > descendentNumbers[secondIndex]) {
//         let position = descendentNumbers[index];
//         descendentNumbers[index] = descendentNumbers[secondIndex];
//         descendentNumbers[secondIndex] = position;
//       }
//     }
//   }


//   console.log(descendentNumbers);

// Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:

let multipliedNumbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
resultado = 1

for (let index = 1; index < multipliedNumbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += index) {
        resultado*= secondIndex     
    }
  }
 console.log(resultado);

// [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]