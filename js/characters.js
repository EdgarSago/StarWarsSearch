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

