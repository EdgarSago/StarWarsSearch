// ****  NAV  **** 
// BUTTONS
const buttonMovies = document.querySelector('.buttonMovies');
const buttonReturn = document.querySelector('.buttonReturn');

buttonMovies.addEventListener('click', () => {
    window.location.href = 'movies.html';
});

buttonReturn.addEventListener('click', () => {
    window.location.href = 'index.html';
});

// ****  HEADER  **** 
// CAROUSEL CHARACTERS & MOVIES
let counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);

// ****  MAIN  ****
const characters = JSON.parse(file);
// console.log(characters.results);

// SEARCH CHARACTERS
const buttonCharacters = document.querySelector('.buttonCharacters');
let inputCharacters = document.querySelector('.inputCharacters');

function search_characters() {
    let inputCharacters = document.querySelector('.inputCharacters').value.toUpperCase();
    characters.results.map((characters) => {
        if (characters.name.toUpperCase() === inputCharacters) {
            templateLightbox(characters);
            document.querySelector('.inputCharacters').value = "";
            // console.log(characters);
        };
    });
};

inputCharacters.addEventListener('keyup', (event) => {
    if (event.code === 'Enter') {
        search_characters();
    };
});

buttonCharacters.addEventListener('pointerdown', (event) => {
    event.preventDefault();
    search_characters();
});

// CARDS
const card = document.querySelector('.card');

function templateCard(characters) {
    let div = document.createElement('div');

    div.innerHTML = `
            <div onclick="btn_card(this)" class="box" title="${characters.name}">
                <img class="img" src="${characters.img1}" alt="Imagen del personaje: ${characters.name}">
            </div>
            `

    card.appendChild(div);
};

function btn_card(div) {
    let starName = div.getAttribute('title');

    characters.results.map((characters) => {
        if (starName === characters.name) {
            templateLightbox(characters);
        };
    });
};

const createCards = characters.results.map((characters) => {
    // console.log(characters);
    templateCard(characters);
});

// LIGHTBOX
let lightbox = document.querySelector('.lightbox');

function templateLightbox(characters) {
    let div = document.createElement('div');

    div.innerHTML = `
            <div class="lightboxContainer">
                <span class="btn_lightbox btn_close">&times;</span>
                <div class="images">
                    <img src="${characters.img1}" alt="Imagen del personaje: ${characters.name}">
                    <img src="${characters.img2}" alt="Imagen del personaje: ${characters.name}">
                </div>
                <div class="img">
                    <span> </span>
                </div>
                <div class="infoContainer">
                    <h2>${characters.name}</h2>
                    <p class="text">
                        Height: <span>${characters.height}</span> <br>
                        Mass: <span>${characters.mass}</span> <br>
                        Hair Color: <span>${characters.hair_color}</span> <br>
                        Skin Color: <span>${characters.skin_color}</span> <br>
                        Eye Color: <span>${characters.eye_color}</span> <br>
                        Birth Year: <span>${characters.birth_year}</span> <br>
                        Gender: <span>${characters.gender}</span> <br>
                    </p>
                </div>
            </div>
            `

    lightbox.style.opacity = 1;
    lightbox.style.visibility = 'visible';
    lightbox.appendChild(div);

    let btn_close = document.querySelector('.btn_close');
    btn_close.addEventListener('click', () => {
        lightbox.style.opacity = 0;
        lightbox.style.visibility = 'hidden';
        lightbox.removeChild(div);
    });
};


