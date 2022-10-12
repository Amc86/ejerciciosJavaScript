//Dado el siguiente javascript, crea una función `attack` a la que le pases como parametro las dos naves y simule un disparo. Esta función generara un numero aleatorio de 1 al numero de la propiedad `.damage` de la primera nave y le restará el resultado al valor de la propiedad `.pv` de la segunda nave.
//Ejecuta la función tantas veces como quieras.


const ship1 = {name: "Banca rota", damage: 44, pv: 150};
const ship2 = {name: "Cacique pero no", damage: 66, pv: 124}

const attack = (shipA, shipB) =>{
    const damage = Math.floor((Math.random() * shipA.damage) + 1);
    shipB.pv -= damage;
}
console.log(ship1, ship2);
// const random = (min, max) =>{
//     return Math.floor(Math.random() + (max - min) + min);
// }

// const attack = (ship1, ship2) =>{

//     let attack1 = random(1, ship1.damage);
//     ship2.pv -= attack1
// }

// attack(ship1,ship2);
// attack(ship2,ship1);
// attack(ship1,ship2);
// attack(ship2,ship1);
// attack(ship1,ship2);
// attack(ship2,ship1);
// attack(ship1,ship2);

// console.log(ship1, ship2);