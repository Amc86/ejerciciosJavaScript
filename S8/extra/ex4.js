//Vamos a usar de nuevo JSON SERVER para crear un listado de personajes de la serie Dragon Ball.

//Para ello, ejecutemos ``json-server --watch exercise-4.json``. En este caso el endpoint con los personajes es `http://localhost:3000/characters`.

//La idea es crear una galería con los planetas, que podemos obtener del endpoint `http://localhost:3000/planets` y, que si el usuario hace click en alguno de los planetas, salga debajo los personajes que están asociados por el .idPlanet a ese planeta en cuestión, mostrando tanto sus imágenes .avatar como sus nombres .name. Para poder obtener la información de los personajes podemos hacer un filtro de los personajes llamando a la url, por ejemplo ``http://localhost:3000/characters?idPlanet=1`` y, teniendo en cuenta que el idPlanet variará dependiendo del planeta seleccionado.
 
//Además de esto, agrega un buscador para poder filtrar los personajes una vez que has seleccionado el planeta. Por lo tanto, deberemos incluir el input debajo del planeta y encima de los personajes listados.

async function getPlanets(){
    const res = await fetch("http://localhost:3000/planets");
    const resPlan = await res.json();
    console.log(resPlan);
    //sacarPersonajes()
}

    for (let i = 0; i < resPlan.length; i++) {
        const planeta = resPlan[i];
        div$$ = document.createElement('div')
        div$$.innerHTML = `<img src="${planet.image}"/> <p>"${planet.name}"</p>
        div$$.add
        console.log(planeta);
    }

        
}

getPlanets()