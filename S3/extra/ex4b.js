//Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista.

const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];

const ul$$ = document.createElement('ul');

for (let i = 0; i < countries.length; i++) {
    const country = countries[i];

    const div$$ = document.createElement('div');

    div$$.innerHTML = `<h4>${country.title}</h4><img src=${country.imgUrl}>`
    document.body.appendChild(div$$);
}

const btn$$ = document.querySelector("button");

btn$$.addEventListener ('click', function(){
    const todosDiv$$ = document.querySelectorAll('div');
    todosDiv$$[todosDiv$$.length -1].remove();
});