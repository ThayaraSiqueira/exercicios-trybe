const salarioBruto = 7000

const inssUm = salarioBruto * 0.08
const inssDois = salarioBruto * 0.09
const inssTres = salarioBruto * 0.11
const inssQuatro = 570.88

const irUm = (salarioBruto * 0.075) - 142.80
const irDois = (salarioBruto * 0.15) - 354.80
const irTres = (salarioBruto * 0.225) - 636.13
const irQuatro = (salarioBruto * 0.275) - 869.36 

// até 1556.94
const salarioLiquido1 = salarioBruto - inssUm  
// de 1556.95 até 1903.98
const salarioLiquido2 = inssDois
// de 1903.99 até 2594.92
const salarioLiquido3 = inssDois + irUm
// de 2594.93 até 2826.65
const salarioLiquido4 = inssTres + irUm
//  de 2826.66 até 3751.05
const salarioLiquido5 = inssTres + irDois
// de 3751.06 até 4664.68
const salarioLiquido6 = inssTres + irTres
//  de 4664.69 até 5189.82
const salarioLiquido7 = inssTres + irQuatro
// de 5189.82 pra cima
const salarioLiquido8 = inssQuatro + irQuatro

if (salarioBruto < 1556.95) {
    console.log(salarioLiquido1)
}

else if (salarioBruto > 1556.95 && salarioBruto < 1903.97) {
    console.log(salarioLiquido2)
}

else if (salarioBruto > 1903.98 && salarioBruto < 2594.92) {
    console.log(salarioLiquido3)
}

else if (salarioBruto > 2594.91 && salarioBruto < 2826.65) {
    console.log(salarioLiquido4)
}

else if (salarioBruto > 2826.64 && salarioBruto < 3751.05) {
    console.log(salarioLiquido5)
}

else if (salarioBruto > 3751.04 && salarioBruto < 4664.68) {
    console.log(salarioLiquido6)
}

else if (salarioBruto > 4664.67 && salarioBruto < 5189.82) {
    console.log(salarioLiquido7)
}

else if (salarioBruto > 5189.81) {
    console.log(salarioLiquido8)
}