const buttonCharacters = document.getElementById('buttonCharacters');
const buttonMovies = document.getElementById('buttonMovies');

buttonCharacters.addEventListener('click', () => {
    window.location.href = 'characters.html';
})

buttonMovies.addEventListener('click', () => {
    window.location.href = 'movies.html';
})