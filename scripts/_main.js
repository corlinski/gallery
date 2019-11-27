function renderPhoto(url) {
    console.log("renderPhoto()");
    // 1. Tworzenie elementu html 
    const $photo = document.createElement('img');
    $photo.src = url;
    // 2. Dodanie "dziecka" (child) - elementu do juz istniejacego "rodzica" - parenta
    const $main = document.querySelector('main');
    $main.appendChild($photo);
}


function displayPhotos(photos) {
    console.log("displayPhotos()");

    // for (let i of photos) {
        //renderPhoto(i);
        // renderPhoto(photos[1]);
        // renderPhoto(photos[2]);
    // }
    
    // for (let i = 0; i < 3; i++) {
    //      renderPhoto("https://picsum.photos/350/200?random=" + i);
    // }

    // photos.forEach(
    //     // callback synchroniczny -> wywolanie zwrotne
    //     function (photo) {
    //         renderPhoto(photo);
    //     }
    // );
    
    photos.forEach(renderPhoto);    // referencja do fukcji
    //test
    console.log(photos);
}


function displayMessage(text, cssClass) {
        console.log("displayMessage()");
        // 1. Tworzenie elementu html 
        const $text = document.createElement('p');
        //$text.innerHTML = text  - tutaj parsuje HTML
        //$text.innerText = text  - nie  parsuje HTML przy odczycie
        $text.textContent = text;
        $text.classList.add('alert', cssClass);     // dodanie klas 
        // 2. Dodanie "dziecka" (child) - elementu do juz istniejacego "rodzica" - parenta
        const $main = document.querySelector('main');
        $main.appendChild($text);    
}

function fetchPhotosByXHR(url) {        // to jest juz archaiczne podejscie 
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    //console.log('fetchPhotosXHR = ' + xhr.status);
    xhr.addEventListener('load', function () {
        //console.log('fetchPhotosXHR after load = ' + xhr.status);
        const text = xhr.response;
        const photos = JSON.parse(text);
        console.log(typeof text);
        console.log(typeof photos);
    });
    xhr.addEventListener('error', function () {
        console.error('błąd serwera');
    });
    xhr.send();
}


function fetchPhotos(url /* parameter */) {
    console.log('fetchPhotos()');
    return fetch(url)  // Promise A
        .then( /* handler bedacy referencja (mozna podac nazwe funkcji) */ function (result) {
            console.log('udalo sie');
            console.log(result);
            if (result.ok) {
                return result.json();  // zwraca Promise B
            } else {
                throw new Error(result.statusText);
            }
            
        })  // addEventListener

}

function parsePhotoUrls(result) {

    const urls = [];
    result.forEach(function (photo) {
        urls.push(photo.imageUrl);
    });
return urls;
}


async function main() {
    console.log("main()");

//    const photos = [
        // "https://picsum.photos/350/200?random=1",
        // "https://picsum.photos/350/200?random=2",
        // "https://picsum.photos/350/200?random=3"
 //   ];

    const photosUrl = 'https://fakes.herokuapp.com/photos'; 
    // Fetch photos
    // XMLHttpRequest
    //fetchPhotosByXHR(photosUrl);

    const photos = await makeRequest(photosUrl);
    const urls = parsePhotoUrls(photos);

    if (urls.length > 0) {
        displayPhotos(urls);
    } else {
        displayMessage("Nie ma zdjęć w galerii", 'alert-danger');
    }


    // fetchPhotos(photosUrl)
    // .then(function(result)  {
    //     console.log('to jest odpowiedz: ', result);
    //     const urls = []; 
    //     result.forEach(function (photo) {
    //         urls.push(photo.imageUrl);
    //     });

    
    // })
    // .catch( /* handler bedacy referencja (mozna podac nazwe funkcji) */ function (reason) {
    //     console.log('nie udalo sie');
    // });



    // const ONE_SECOND = 1000;
    // setTimeout(function () {
    //     displayMessage("Tekst to wyswietlenia", 'alert-danger');
    // }, 2 * ONE_SECOND);

}

console.log(1);
window.addEventListener('DOMContentLoaded', main);  // po zaladowaniu HTML uruchomi main - tutaj tylko referencja do funckji (jesli bedzie main() to uruchomi od razu main)
console.log(2);  //wyswietli sie 1 potem 2 a potem main, bo html jeszcze sie laduje

// main();
