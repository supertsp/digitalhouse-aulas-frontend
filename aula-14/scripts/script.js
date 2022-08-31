let nomeUsuario = localStorage.getItem("nomeUsuario")
console.log(nomeUsuario)
if (nomeUsuario === null) {
    nomeUsuario = prompt("Qual é o seu nome?")
    console.log(nomeUsuario)
    localStorage.setItem("nomeUsuario", nomeUsuario)
    document.getElementById("nomeUsuario").innerHTML = nomeUsuario
} else {
    document.getElementById("nomeUsuario").innerHTML = nomeUsuario
}


let form = document.querySelector("form")
// let form = document.forms["formHobbies"]


form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    let listaDiasSemana = form["diaSemana"]
    let diasSelecionados = []

    for (const diaAtual of listaDiasSemana) {
        if (diaAtual.checked) {
            diasSelecionados.push(diaAtual.value)
        } 
    }


})


let titulo = form["titulo"]

titulo.onblur = () => {     
    titulo.value = titulo.value.toLocaleUpperCase()

    const tagErro = titulo.parentElement.children[2]

    if (titulo.value == "" || titulo.value.length < 10) {        
        tagErro.innerHTML = "O mínimo de caracteres é 11"
    } else {
        tagErro.innerHTML = ""
    }   

}

let categoria = form["categoria"]
categoria.onblur = () => {
    const tagErro = categoria.parentElement.children[2]

    if (categoria.value === "") {
        tagErro.innerHTML = "Esse campo não pode ser em branco"
    } else {
        tagErro.innerHTML = ""
    }
}

//outros eventos principais de forms
// focus e change