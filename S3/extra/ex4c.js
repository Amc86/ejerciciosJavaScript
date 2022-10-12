// # Español
// Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos de las listas que elimine ese mismo elemento del html.

const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];

const ul$$ = document.createElement('ul');

for (let i = 0; i < countries.length; i++) {
    const country = countries[i];

    const div$$ = document.createElement('div');

    div$$.innerHTML = `<h4>${country.title}</h4><img src=${country.imgUrl}>`
    document.body.appendChild(div$$);

    const btn2$$ = document.createElement('button');
    btn2$$ .textContent = "eliminar solo esta imagen";
    div$$.appendChild(btn2$$)
    
    btn2$$.addEventListener ('click', function(){
    const btn2$$ = document.querySelector('div');
    btn2$$.remove();
    }
)};

const btn$$ = document.querySelector("button");

btn$$.addEventListener ('click', function(){
    const todosDiv$$ = document.querySelectorAll('div');
    todosDiv$$[todosDiv$$.length -1].remove();
});

