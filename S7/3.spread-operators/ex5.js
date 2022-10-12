//Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operators.

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; 

const colorsCopy = [...colors];
colorsCopy.splice(2, 1);

console.log(colors);
console.log(colorsCopy);

