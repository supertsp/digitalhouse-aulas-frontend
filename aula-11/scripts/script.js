let form = document.querySelector("form")
// let form = document.forms["formHobbies"]


form.addEventListener("submit", (evento) => {
    evento.preventDefault()
    
    console.log("form enviado");
    
    //objetivo - pegar somente os checkboxes que foram selecionados

    //1 - pegar todos os checkboxes
    let listaDiasSemana = form["diaSemana"]

    //2 - ver todos os checkboxes
    console.log(listaDiasSemana)

    //3 - descobrir quais elementos que possuem .checked === true
    let diasSelecionados = []

    for (const diaAtual of listaDiasSemana) {
        console.log(
            diaAtual.value,
            diaAtual.checked
        )

        if (diaAtual.checked) {
            //4 - salvar os dias selecionados
            diasSelecionados.push(diaAtual.value)
        } 
    }

    //5 - ver todos os dias selecionados
    // console.log(diasSelecionados);

})



// let todosStatus = form["status"]
// for (const statusAtual of todosStatus) {
//     console.log(
//         statusAtual.value,
//         statusAtual.checked
//     )
// }


//TODO: após terminar digitação do título
// deverá ser transformado em caixa alta todo texto

let titulo =  form["titulo"]

//1º adicionar evento de blur no titulo
titulo.onblur = () => {
    //2º pego o value e tranformo em caixa alta
    // let textoDigitado = titulo.value.toLocaleUpperCase()
    
    //3º substituir a string original
    // titulo.value = textoDigitado
 
    titulo.value = titulo.value.toLocaleUpperCase()
}
