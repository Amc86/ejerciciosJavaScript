//Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click

const btn$$ = document.createElement("button");
btn$$.setAttribute("id", "btnToClick");

function mostrarevento(){
    console.log("click");
}
document.body.appendChild(btn$$);

btn$$.addEventListener("click", mostrarevento)

