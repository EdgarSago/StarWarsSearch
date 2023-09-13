const buttonCharacters = document.getElementById('buttonCharacters');
const buttonFilms = document.getElementById('buttonFilms');

buttonCharacters.addEventListener('pointerdown', () => {
    window.location.href = 'characters.html';
})

buttonFilms.addEventListener('pointerdown', () => {
    window.location.href = 'films.html';
})