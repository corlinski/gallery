function renderPhoto(url) {
    console.log("renderPhoto()");
    // 1. Tworzenie elementu html 
    const $photo = document.createElement('img');
    $photo.src = url;
    // 2. Dodanie "dziecka" (child) - elementu do juz istniejacego "rodzica" - parenta
    const $main = document.querySelector('main');
    $main.appendChild($photo);
}


function displayPhotos() {
    console.log("displayPhotos()");

    const photos = [
        "https://picsum.photos/350/200?random=1",
        "https://picsum.photos/350/200?random=2",
        "https://picsum.photos/350/200?random=3"
    ];

    for (let i of photos) {
        //renderPhoto(i);
        // renderPhoto(photos[1]);
        // renderPhoto(photos[2]);
    }
    
    for (let i = 0; i < 3; i++) {
         renderPhoto("https://picsum.photos/350/200?random=" + i);
    }

    // photos.forEach(
    //     // callback synchroniczny -> wywolanie zwrotne
    //     function (photo) {
    //         renderPhoto(photo);
    //     }
    // );
    
    photos.forEach(renderPhoto);    // referencja do fukcji

    console.log(photos);
}



function main() {
    console.log("main()");
    displayPhotos();
}

console.log(1);
window.addEventListener('DOMContentLoaded', main);  // po zaladowaniu HTML uruchomi main
console.log(2);  //wyswietli sie 1 potem 2 a potem main, bo html jeszcze sie laduje

// main();
