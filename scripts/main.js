const loader = require('./loader');
const makeRequest = require('./request');
//const storage = require('./storage');
const storage = require('./cookies');



function renderPhoto(url, name) {
    console.log("renderPhoto()");
    const $photo = document.createElement('img');
    $photo.src = url;
    $photo.alt = name;
    const $main = document.querySelector('main');
    $main.appendChild($photo);
}

function displayMessage(displayText) {
    console.log("displayMessage()");
    const $text = document.createElement('span');
    $text.textContent = displayText;
    $text.classList.add('alert', 'alert-danger');     // dodanie klas css
    // 2. Dodanie "dziecka" (child) - elementu do juz istniejacego "rodzica" - parenta
    const $main = document.querySelector('main');
    $main.appendChild($text);
}

async function main() {
    const url = 'data/photos.json';
    const displayText = 'UWAGA TEXT';

    // eslint-disable-next-line no-undef
    let photos = storage.read('fotki');

    if (!photos) {   
        loader.show();
        const photos1 = await makeRequest(url);
        const photos2 = await makeRequest(url);
        const photos3 = await makeRequest(url);
        photos = [].concat(photos1, photos2, photos3);
    
        storage.save('fotki', photos);  // zapisz zbior
    
        loader.hide();
    }        

    photos.forEach(function (photo) {
        renderPhoto(photo.imageUrl, photo.name);
    });

    //console.log('Wynik: ', photos);
    //displayMessage(displayText);
}

window.addEventListener('DOMContentLoaded', main);  