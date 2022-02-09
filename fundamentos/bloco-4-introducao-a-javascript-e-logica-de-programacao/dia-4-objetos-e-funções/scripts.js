// Parte I

// Usando o objeto abaixo, faça os exercícios a seguir:

// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// // // // 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
// // // // Bem-vinda, Margarida

// // console.log('Bem-vinda, ' + info.personagem);

// // // // 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:
// // {
// //   personagem: 'Margarida',
// //   origem: 'Pato Donald',
// //   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// //   recorrente: 'Sim'
// // }

// info.recorrente = 'Sim';

// // console.log(info);

// // // 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
// // personagem
// // origem
// // nota
// // recorrente

// // for (let key in info) {
// //     console.log(key);
// // }

// // // 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
// // Margarida
// // Pato Donald
// // Namorada do personagem principal nos quadrinhos do Pato Donald
// // Sim

// // for(let key in info) {
// //     console.log(info[key]);
// // }

// // // 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:
// // Margarida e Tio Patinhas
// // Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
// // Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
// // Ambos recorrentes // Atenção para essa última linha!
// let secondInfo = {
//     personagem: 'Tio Patinhas',
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim'
//   };

// for(let key in info) {
//     if (key === 'recorrente' && info[key] === 'Sim' && secondInfo[key] === 'Sim') {
//         console.log('Ambos recorrentes');
//     } else {
//         console.log(info[key] + 'e' + secondInfo[key]);
//     }
// }

// Usando o objeto abaixo, faça os exercícios a seguir:
// let leitor = {
//   nome: 'Julia',
//   sobrenome: 'Pessoa',
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: 'O Pior Dia de Todos',
//       autor: 'Daniela Kopsch',
//       editora: 'Tordesilhas',
//     },
//   ],
// };
// 6 - Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

// console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + '"' + leitor.livrosFavoritos[0].titulo + '"' + ".");

// 7 - Adicione um novo livro favorito na chave livrosFavoritos , que é um array . Atribua a esta chave um objeto contendo as seguintes informações:
// {
//   titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//   autor: 'JK Rowling',
//   editora: 'Rocco',
// }

// leitor.livrosFavoritos[1] = {
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editora: 'Rocco',
// }

// console.log(leitor);

// 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".

// console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos');


// Parte II

// Agora vamos fazer um exercício que vai deixar nítido como funções com responsabilidades bem definidas deixam o código mais bem escrito.
// A manipulação de arrays pode ser complexa em alguns momentos e por isso o JavaScript conta com diversos métodos para a sua manipulação. A documentação é sempre a nossa maior aliada, se você tiver curiosidade de ler mais sobre esses métodos, clique aqui para acessar a documentação completa. Não se preocupe em entender todos os métodos, eles serão trabalhados cada vez com mais frequência durante o curso e sempre que um método novo for necessário ele será ensinado a você.
// Spoiler-alert : para os exercícios do dia, os métodos split , join e reverse podem ser muito úteis.
// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false

function checkPalindrome(string){
    let reverse = string.split('').reverse().join('');
    if (reverse === string) {
        return true;
    } else {
        return false; 
    }
}

console.log(checkPalindrome('arara')); 



// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .
// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .
// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .
// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .
// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15 .
// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false
