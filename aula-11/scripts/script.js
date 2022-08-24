let form = document.querySelector("form")

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    console.log("form enviado");
})