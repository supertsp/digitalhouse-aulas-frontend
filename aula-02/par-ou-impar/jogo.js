//http://127.0.0.1:5500/aula-02/par-ou-impar/

//vars globais de controle || parametrização do jogo
const PAR = "par"
const IMPAR = "impar"
let numeroSorteado = 0
let ehPar = false
let contVitoriasJogador = 0
let contVitoriasCpu = 0


console.log(
    "numeroSorteado", numeroSorteado,
    "\nehPar", ehPar
)

/*===============================
        O jogo
=============================== */
while(contVitoriasJogador < 2 && contVitoriasCpu < 2) {
    sorteiaNumero()
    descobreVencedor()
}

if (contVitoriasJogador >= 2) {
    console.log("🎉 Parabéns Jogador 🎉")
} else {
    console.log("Infelimente o Computador ganhou 👾❤️")
}

/*===============================
        functions
=============================== */
function sorteiaNumero() {
    numeroSorteado = parseInt(Math.random() * 10) + 1
}

function descobreVencedor() {
    // operador ternário: [pergunta] ? [true] : [false]
    ehPar = numeroSorteado % 2 === 0 ? true : false

    let ladoJogador = lerEvalidarEntrada()

    if ((ladoJogador === PAR && ehPar) ||
        (ladoJogador === IMPAR && !ehPar)) {
        console.log("Parabéns Jogador!!! Uhhhhu")
        contVitoriasJogador++
    } else {
        console.log("iiiiiiiiii 😭")
        contVitoriasCpu += 1
    }
}

function lerEvalidarEntrada() {
    let input = prompt("Escolha seu lado: \n Par ou Impar")

    while (input !== PAR && input !== IMPAR) {
        alert("digite novamente")
        input = prompt("Escolha seu lado: \n Par ou Impar")
    }

    return input
}

console.log("fim")