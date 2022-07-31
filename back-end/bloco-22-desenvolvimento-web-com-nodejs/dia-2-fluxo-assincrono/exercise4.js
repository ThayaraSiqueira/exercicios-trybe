// Create a function that reads all data from the file and prints each character in the format id - Name. For example: 1 - Homer Simpson.
// Create a function that takes the id of a character as parameter and returns a Promise that is solved with the data of the character that has the informed id. If there is no character with the id entered, reject the Promise with the reason "id not found".
// Create a function that changes the simpsons.json file removing the characters with id 10 and 6.
// Create a function that reads the simpsons.json file and creates a new file, called simpsonFamily.json, containing the characters with id's 1 to 4.
// Create a function that adds the character Nelson Muntz to the simpsonFamily.json file.
// Create a function that replaces the character Nelson Muntz with the character Maggie Simpson in the simpsonFamily.json file.
const fs = require('fs').promises;

async function readAll() {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(fileContent);
    const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);
  
    strings.forEach((string) => console.log(string));
  }

  async function getSimpsonById(id) {
    const fileContent = await fs
      .readFile('./simpsons.json', 'utf-8');
    
    const simpsons = JSON.parse(fileContent);
    const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id);

    if (!chosenSimpson) {
        throw new Error('id não encontrado');
    }
    return chosenSimpson;
  }

  async function deleteSimpsonById(id) {
    const fileContent = await fs
      .readFile('./simpsons.json', 'utf-8');
    
    const simpsons = JSON.parse(fileContent);
    const newArray = simpsons.filter((simpson) => Number(simpson.id) !== 6 && Number(simpson.id) !== 10);

    await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
  }

  async function createSimpsonsFamily() {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);

  const familyIds = [1, 2, 3, 4];
  const simpsonsFamily = simpsons
    .filter((simpson) => familyIds.includes(Number(simpson.id)));

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
  }

  async function addNelsonToFamily() {
    const fileContent = await fs
      .readFile('./simpsonsFamily.json', 'utf-8');
    
    const simpsonsFamily = JSON.parse(fileContent);
    simpsonsFamily.push({ id: '8', name: 'Nelson Muntz' });
    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
  }

  async function replaceNelson() {
    const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
    const simpsons = JSON.parse(fileContent);
    const simpsonsWithoutNelson = simpsons.filter((simpson) => simpson.id !== '8');
    const simpsonsWithMaggie = simpsonsWithoutNelson
      .concat([{ id: '15', name: 'Maggie Simpson' }]);
    return fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie));
  }

  function main() {
    readAll();
    deleteSimpsonById();
    createSimpsonsFamily();
    addNelsonToFamily();
    replaceNelson();
  }
  
  main();