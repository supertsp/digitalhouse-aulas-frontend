//vars globais
let inputs = document.querySelectorAll("input[type=text]")
let divGaleria = document.getElementById("galeria")
let buttonEnviar = document.querySelector("button")

//lógica principal
adicionarEventoParaInputs(inputs, "blur")

buttonEnviar.onclick = enviarUrls

//funções
function enviarUrls() {
    limparGaleria()
    habilitarInputs(inputs)    
    adiconarImagensNaGaleria(inputs)    
}

function adicionarEventoParaInputs(listaInputs, nomeEvento) {
    for (const input of listaInputs) {
        input.addEventListener(nomeEvento, () => {
            input.disabled = true
        })
    }
}

function habilitarInputs(listaInputs) {
    for (const input of listaInputs) {
        input.disabled = false
    }
}

function limparGaleria(){
    divGaleria.innerHTML = ""
}

function adiconarImagensNaGaleria(listaInputs) {
    for (const input of listaInputs) {
        let img = document.createElement("img")
        img.src = input.value
        divGaleria.appendChild(img)

        input.value = ""
    }
}