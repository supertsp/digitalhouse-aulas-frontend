//const PAR = "par"
//min = 1
//max = 10

const PAR = "par"
const IMPAR = "impar"
let numeroSorteado = parseInt(Math.random() * 10) + 1

console.log(numeroSorteado)

let lado = prompt("Escolha seu lado: \n Par ou Impar")

while(lado !== PAR && lado !== IMPAR) {
    alert("digite novamente")
    lado = prompt("Escolha seu lado: \n Par ou Impar")
}

if (lado === PAR) {
    console.log("escolheu par")
}
else if (lado === IMPAR) {
    console.log("escolheu impar")
}
else {
    console.log("digite novamente")
}

console.log(lado)
