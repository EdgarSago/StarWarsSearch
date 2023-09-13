let laserAudio = new Audio('./assets/sable-laser.mp3');
let lightboxAudio = new Audio('./assets/star-wars-lightbox.mp3');

// ****  NAV  **** 
// BUTTONS
const buttonFilms = document.querySelector('.buttonFilms');
const buttonReturn = document.querySelector('.buttonReturn');

buttonFilms.addEventListener('pointerdown', () => {
    window.location.href = 'films.html';
});

buttonReturn.addEventListener('pointerdown', () => {
    window.location.href = 'index.html';
});

// ****  HEADER  **** 
// CAROUSEL
let counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);

// ****  MAIN  ****
// FETCH API STAR WARS
const loadStarWars = async (dataFilms) => {
    fetch('https://swapi.dev/api/people/?page=1')
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            dataFilms(data)
        })
        .catch(error => console.error('Error fetching starwars:', error));
    await fetch('https://swapi.dev/api/people/?page=2')
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            dataFilms(data)
        })
        .catch(error => console.error('Error fetching starwars:', error));
};

// JSON FILM IMAGE
const characterImage = JSON.parse(charactersImage);
// console.log(characterImage);

// SEARCH CHARACTERS
const buttonCharacters = document.querySelector('.buttonCharacters');
let inputStarWars = document.querySelector('.inputStarWars');

function searchCharacters() {
    loadStarWars((characters) => {
        let inputStarWars = document.querySelector('.inputStarWars').value.toUpperCase();

        characters.results.map((characters) => {
            characterImage.map((characterImage) => {
                if (inputStarWars === characters.name.toUpperCase() && inputStarWars === characterImage.name.toUpperCase()) {
                    templateLightbox(characters, characterImage);
                    lightboxAudio.play();
                    document.querySelector('.inputStarWars').value = "";
                    // console.log(characters, characterImage);
                };
            });
        });

    });
};

inputStarWars.addEventListener('keyup', (event) => {
    if (event.code === 'Enter') {
        event.preventDefault();
        searchCharacters();
    };
});

buttonCharacters.addEventListener('pointerdown', (event) => {
    event.preventDefault();
    searchCharacters();
});

// CARDS
const card = document.querySelector('.card');

function templateCard(characters, characterImage) {
    let div = document.createElement('div');

    div.innerHTML = `
            <div onclick="btn_card(this)" class="box" title="${characters.name}">
                <img class="img" src="${characterImage.img1}" alt="Character image: ${characters.name}">
            </div>
            `

    card.appendChild(div);
};

function btn_card(div) {
    loadStarWars((characters) => {

        characters.results.map((characters) => {
            let starName = div.getAttribute('title');

            characterImage.map((characterImage) => {
                if (starName === characters.name && starName === characterImage.name) {
                    templateLightbox(characters, characterImage);
                    lightboxAudio.play();
                    // console.log(characters, characterImage);
                };
            });
        });

    });
};

function cardCharacters() {
    loadStarWars((characters) => {

        characters.results.map((characters) => {
            characterImage.map((characterImage) => {
                if (characters.name === characterImage.name) {
                    templateCard(characters, characterImage);
                    // console.log(`CharacterImage.name: ${characterImage.name}, character.name: ${characters.name}`);
                };
            });
        });

    });
};

cardCharacters();

// LIGHTBOX
let lightbox = document.querySelector('.lightbox');

function templateLightbox(characters, characterImage) {
    let div = document.createElement('div');

    div.innerHTML =
        `
            <div class="lightboxContainer">
                <span class="btn_lightbox btn_close">&times;</span>
                <div class="images">
                    <img src="${characterImage.img1}" alt="Character image: ${characters.name}">
                    <img src="${characterImage.img2}" alt="Character image: ${characters.name}">
                </div>
                <div class="img">
                    <span> </span>
                </div>
                <div class="infoContainer">
                    <h2>${characters.name}</h2>
                    <p>
                        Height: <span>${characters.height}</span> <br>
                        Mass: <span>${characters.mass}</span> <br>
                        Hair Color: <span>${characters.hair_color}</span> <br>
                        Skin Color: <span>${characters.skin_color}</span> <br>
                        Eye Color: <span>${characters.eye_color}</span> <br>
                        Birth Year: <span>${characters.birth_year}</span> <br>
                        Gender: <span>${characters.gender}</span>
                    </p>
                </div>
            </div>
        `

    lightbox.style.opacity = 1;
    lightbox.style.visibility = 'visible';
    lightbox.appendChild(div);

    let btn_close = document.querySelector('.btn_close');
    btn_close.addEventListener('pointerdown', () => {
        lightbox.style.opacity = 0;
        lightbox.style.visibility = 'hidden';
        lightboxAudio.pause();
        lightboxAudio.currentTime = 0;
        laserAudio.play();
        lightbox.removeChild(div);
    });
};

// FOOTER
const footer = document.querySelector('.footer');

function tfooter() {
    let github = "https://github.com/EdgarSagom/StarWarsSearch";
    let instagram = "https://www.instagram.com/edgarsagom/";
    let twitter = "https://twitter.com/SagomEdgar";

    let div = document.createElement('div');

    div.innerHTML =
        `
            <h4>Created by: Edgar Sagom</h4>
            <div>
                <p>Contacts:</p>
                <a href="${github}" target="_blank" rel="noopener noreferrer">
                    <img src="./assets/github.svg" alt="Github Logo">
                </a>
                <a href="${instagram}" target="_blank" rel="noopener noreferrer">
                    <img src="./assets/instagram.svg" alt="Instagram Logo">
                </a>
                <a href="${twitter}" target="_blank" rel="noopener noreferrer">
                    <img src="./assets/twitter.svg" alt="Twitter Logo">
                </a>
            </div>
        `
    footer.appendChild(div);
};

tfooter();
