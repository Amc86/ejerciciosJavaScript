// Dado el siguiente string

// ```js
// const text = `gracioso-pero-no-gracioso-de-risa-gracioso-de-raro``
// ````

// transformalo en el siguiente (Mayusculas incluidas)

// `Gracioso Pero No Gracioso De Risa Gracioso De Raro`

const text = "gracioso-pero-no-gracioso-de-risa-gracioso-de-raro";

const nuevoString = text.replace(/-/g, " ");

const palabras = nuevoString.split(" ");

for (let i = 0; i < palabras.length; i ++){
    palabras[i] = palabras[i][0].toUpperCase() + palabras[i].slice(1);
}
console.log(palabras.join(" "));

