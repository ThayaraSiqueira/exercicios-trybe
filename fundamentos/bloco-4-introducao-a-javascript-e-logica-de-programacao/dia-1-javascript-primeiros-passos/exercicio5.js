const a = 90
const b = 45
const c = 45

const soma = a + b + c;
const positivos = a > 0 && b > 0 && c > 0;

if (positivos) {
    if (soma == 180) {
    console.log(true)
}

else if (soma !== 180) {
    console.log(false)

}
}
else {
    console.log("error")
}