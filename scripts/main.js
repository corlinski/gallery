const loader = require('./loader');
const makeRequest = require('./request');
//const storage = require('./storage');
const storage = require('./cookies');



let counter = 0;

function renderPhoto(url, name) {
    console.log("renderPhoto()");
    const $photo = document.createElement('img');
    $photo.src = url;
    $photo.alt = name;
    $photo.addEventListener('load', () => {
        //console.log($img.src);
        counter++;

        if (counter === 9) {
            document.dispatchEvent(new Event('obrazki-zaladowane'));
        }
    });    
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
    loader.show(); 

    // eslint-disable-next-line no-undef
    let photos = storage.read('fotki');

    document.addEventListener('obrazki-zaladowane', () => {
        loader.hide();
    });

    if (!photos) {   
        const photos1 = await makeRequest(url);
        const photos2 = await makeRequest(url);
        const photos3 = await makeRequest(url);
        photos = [].concat(photos1, photos2, photos3);
    
        storage.save('fotki', photos);  // zapisz zbior
        //loader.hide(); 
    }        


    photos.forEach(function (photo) {
        renderPhoto(photo.imageUrl, photo.name);
    });

    //setTimeout(loader.hide(), 2000);

    //console.log('Wynik: ', photos);
    //displayMessage(displayText);
}

window.addEventListener('DOMContentLoaded', main);  