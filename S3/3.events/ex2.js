//Basandote en el siguiente html, añade un evento 'focus' que ejecute un console.log con el valor del input.
const input$$ = document.querySelector("input");


function crearFocus(evento){
    console.log(evento.target.value);
}
input$$.addEventListener("focus", crearFocus)

