//Dado el siguiente array de objetos. Crea dinamicamente en el html una lista de div que contenga un elemento h4 para el titulo y otro elemento img para la imagen. 

const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];

const ul$$ = document.createElement('ul');

for (let i = 0; i < countries.length; i++) {
    const country = countries[i];

    const div$$ = document.createElement('div');

    div$$.innerHTML = `<h4>${country.title}</h4><img src=${country.imgUrl}>`
    document.body.appendChild(div$$);
}
