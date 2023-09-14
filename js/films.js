let laserAudio = new Audio('./assets/sable-laser.mp3');
let lightboxAudio = new Audio('./assets/star-wars-lightbox.mp3');

// ****  NAV  **** 
// BUTTONS
const buttonGoCharacters = document.getElementById('buttonGoCharacters');
const buttonReturn = document.getElementById('buttonReturn');

buttonGoCharacters.addEventListener('click', () => {
    window.location.href = 'characters.html';
});

buttonReturn.addEventListener('click', () => {
    window.location.href = 'index.html';
});

// ****  HEADER  **** 
// CAROUSEL
var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);

// ****  MAIN  ****
// FETCH API STAR WARS
const loadStarWars = (dataFilms) => {
    fetch('https://swapi.dev/api/films/')
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            dataFilms(data)
        })
        .catch(error => console.error('Error fetching starwars:', error));
};

// JSON FILM IMAGE
const filmImage = JSON.parse(filmsImage);
// console.log(filmsImage);

// SEARCH
let buttonFilms = document.querySelector('.buttonFilms');
let inputStarWars = document.querySelector('.inputStarWars');

function searchFilms() {
    loadStarWars((films) => {
        let inputStarWars = document.querySelector('.inputStarWars').value.toUpperCase();

        films.results.map((films) => {
            filmImage.map((filmImage) => {
                if (inputStarWars === films.title.toUpperCase() && inputStarWars === filmImage.title.toUpperCase()) {
                    templateLightbox(films, filmImage);
                    lightboxAudio.play();
                    document.querySelector('.inputStarWars').value = "";
                    // console.log(films, filmsImage);
                };
            });
        });

    });
};

inputStarWars.addEventListener('keyup', (event) => {
    if (event.code === 'Enter') {
        event.preventDefault();
        searchFilms();
    };
});

buttonFilms.addEventListener('pointerdown', (event) => {
    event.preventDefault();
    searchFilms();
});

// CARDS
const card = document.querySelector('.card');

function templateCard(films, filmImage) {
    let div = document.createElement('div');

    div.innerHTML =
        `
            <div onclick="btn_card(this)" class="box" title="${films.title}">
                <img class="img" src="${filmImage.img1}" alt="Film image: ${films.title}">
            </div>
        `
    card.appendChild(div);
};

function btn_card(div) {
    loadStarWars((films) => {

        films.results.map((films) => {
            let starTitle = div.getAttribute('title');

            filmImage.map((filmImage) => {
                if (starTitle === films.title && starTitle === filmImage.title) {
                    templateLightbox(films, filmImage);
                    lightboxAudio.play();
                    // console.log(films, filmImage);
                };
            });
        });

    });
};

function cardsFilms() {
    loadStarWars((films) => {

        films.results.map((films) => {
            filmImage.map((filmImage) => {
                if (filmImage.title === films.title) {
                    templateCard(films, filmImage);
                    // console.log(`filmImage.title: ${filmImage.title}, films.title: ${films.title}`);
                };
            });
        });

    });
};

cardsFilms();

// LIGHTBOX
let lightbox = document.querySelector('.lightbox');

function templateLightbox(films, filmImage) {
    let div = document.createElement('div');

    div.innerHTML =
        `
            <div class="lightboxContainer">
                <span class="btn_lightbox btn_close">&times;</span>
                <div class="images">
                    <img src="${filmImage.img2}" alt="Film image: ${films.title}">
                    <img src="${filmImage.img1}" alt="Film image: ${films.title}">
                </div>
                <div class="img">
                    <span> </span>
                </div>
                <div class="infoContainer">
                    <h2>${films.title}</h2>
                    <p class="text">
                        N° Episode: <span>${films.episode_id}</span> <br>
                        Director: <span>${films.director}</span> <br>
                        Producer: <span>${films.producer}</span> <br>
                        Release Date: <span>${films.release_date}</span> <br>
                        Opening Crawl: <span>${films.opening_crawl}</span>
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
