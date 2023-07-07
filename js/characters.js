// BUTTONS
const buttonGoMovies = document.getElementById('buttonGoMovies');
const buttonReturn = document.getElementById('buttonReturn');

buttonGoMovies.addEventListener('click', () => {
    window.location.href = 'movies.html';
});

buttonReturn.addEventListener('click', () => {
    window.location.href = 'index.html';
});

// CAROUSEL CHARACTERS & MOVIES
var counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
},5000);

// CARDS
const characters = JSON.parse(file);
console.log(characters.results);

function templateCard(character) {
    let a = document.createElement('a');

    a.innerHTML = `
    <a href="" class="box" title="${character.name}">
        <img class="img" src="${character.img1}" alt="Imagen del personaje: ${character.name}">
    </a>
    `

    const card = document.querySelector('.card');
    card.appendChild(a);
}

function createCards() {
    for (let i = 0; i < characters.results.length; i++) {
        templateCard(characters.results[i]);
    }
}

createCards();