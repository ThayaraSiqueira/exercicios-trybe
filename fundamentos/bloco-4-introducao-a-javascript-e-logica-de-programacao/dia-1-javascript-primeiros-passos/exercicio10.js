const valorDoProduto = 60
const valorDeVenda = 150
const valorTotalDoCusto = valorDoProduto * 1.2
const lucro = valorDeVenda - valorTotalDoCusto
const valoresPositivos = valorDoProduto > 0 && valorDeVenda > 0

if (valoresPositivos) {
    console.log(lucro)
}

else {
    console.log("Valores inválidos")
}

