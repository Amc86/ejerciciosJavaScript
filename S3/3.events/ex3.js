//Basandote en el siguiente html, añade un evento 'input' que ejecute un console.log con el valor del input.

const input$$ = document.querySelector("input");

function crearInput(evento){
    console.log(evento.target.value);
}

input$$.addEventListener("input", crearInput)