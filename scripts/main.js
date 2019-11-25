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

function main() {
    console.log("main()");

    const photos = [
        "https://picsum.photos/350/200?random=1",
        "https://picsum.photos/350/200?random=2",
        "https://picsum.photos/350/200?random=3"
    ];

    if (photos.length > 0) {
        displayPhotos(photos);
    } else {
        displayMessage("Nie ma zdjęć w galerii", 'alert-danger');
    };

    // const ONE_SECOND = 1000;
    // setTimeout(function () {
    //     displayMessage("Tekst to wyswietlenia", 'alert-danger');
    // }, 2 * ONE_SECOND);

}

console.log(1);
window.addEventListener('DOMContentLoaded', main);  // po zaladowaniu HTML uruchomi main
console.log(2);  //wyswietli sie 1 potem 2 a potem main, bo html jeszcze sie laduje

// main();
