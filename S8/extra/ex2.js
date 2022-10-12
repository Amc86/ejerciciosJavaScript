//Ahora vamos a trabajar con JSON SERVER para simular una api. Es muy fácil de usar. Simplemente instálalo de manera global usando el comando  `npm i -g json-server` y una vez lo tengas instalado, ejecuta este comando `json-server --watch exercise-2.json` en la posición donde esté el archivo exercise-2.json. Los datos que nos brindará serán los alojados en el archivo exercise-2.json y estarán accesibles por defecto en la url localhost:3000.
 
//Para este ejercicio vamos a obtener y pintar en el html una serie de notas del diario de nuestro queridísimo Eliot. Para ello deberemos ejecutar el comando que comentabamos anteriormente y hacer un .fetch() a la url `http://localhost:3000/diary`.

//Una vez tengas los datos tenemos que ordenarlos por fecha de menor a mayor con la propiedad .date. Nuestro carismático personaje es un poco caótico y escribe las notas en páginas salteadas...
  
//Cuando lo tengas crea un div para cada nota del diario e introduce un ``<h3>``, un  ``<h5>`` y un ``<p>`` para su .title, .date y .description respectivamente.
  
//Finalmente añade un botón para poder eliminar las notas del diario. En concreto hay una que a Eliot no le apetece recordar mucho...

const removeP = (nodeEl$$) => {
    nodeEl$$.remove();
}

const buscar = async () => {
    var res = await fetch ('http://localhost:3000/diary');
    console.log(resJas)

    resJas = resJas.sort(function(a, b){return new Date(a.date) - new Date(b.date)});

    for (let i = 0; i < resJas.length; i++) {
        const objeto = resJas[i];
        consolelog(objeto);

        let p = document.createElement('p');
        let h3 = document.createElement('h3');
        let h5 = document.createElement('h5');
        let p2 = document.createElement('p')
        let container =document.createElement('div');
        p1.textContent = objeto.id;
        h3.textContent = objeto.date;
        h5.textContent = objeto.title;
        p2.textContent = objeto.description;
        container.appendChild(p1);
        container.appendChild(p3);
        container.appendChild(h5);
        container.appendChild(p2);
        document.body.appendChild(container);

        let btEliminar$$ = document.createElement('button');
        container.appendChild(btEliminar$$);
        btEliminar$$.textContent = "X";
        btEliminar$$.addEventListener("click",() => (removerP(container)))
    }
}
