let input1 = document.getElementById("urlImagem1")
let input2 = document.getElementById("urlImagem2")
let input3 = document.getElementById("urlImagem3")
let divGaleria = document.getElementById("galeria")


//TODO: após exibir a imagem deverá ser limpo o input

function cliqueiEnviar() {
    ganhouFocoInput1()

    let img = document.createElement("img")
    img.src = input1.value

    divGaleria.appendChild(img)
}


function perdeuFocoInput1() {
    input1.setAttribute("disabled", true)
}

function ganhouFocoInput1() {
    input1.removeAttribute("disabled")
}




// //Utilizando virgula no console
// console.log(
//     "input1: ",
//     input1.value,
//     "input2: ",
//     input2.value,
//     "input3: ",
//     input3.value
// );

// //com concatenção
// console.log(
//     "input1: " + input1.value +
//     "input2: " + input2.value +
//     "input3: " + input3.value
// );


// //template String
// console.log(
//     `
//         input1: ${input1.value}, 
//         input2: ${input2.value}, 
//         input3: ${input3.value}
//     `
// );