// BUTTONS
const buttonGoCharacters = document.getElementById('buttonGoCharacters');
const buttonReturn = document.getElementById('buttonReturn');

buttonGoCharacters.addEventListener('click', () => {
    window.location.href = 'characters.html';
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
