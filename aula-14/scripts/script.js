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


let titulo =  form["titulo"]

titulo.onblur = () => {     
    titulo.value = titulo.value.toLocaleUpperCase()

    const tagErro = titulo.parentElement.children[2]

    if (titulo.value == "" || titulo.value.length < 10) {        
        tagErro.innerHTML = "O mínimo de caracteres é 11"
    } else {
        tagErro.innerHTML = ""
    }   

}

//outros eventos principais de forms
// focus e change