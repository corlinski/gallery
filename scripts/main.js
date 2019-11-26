function renderPhoto(url,name) {
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

    loader.show();
    const url = 'https://fakes.herokuapp.com/users';
    const displayText = 'UWAGA TEXT';

    const photos1 = await makeRequest(url);
    const photos2 = await makeRequest(url);
    const photos3 = await makeRequest(url);
    let photos =[].concat(photos1, photos2, photos3);
    
    setTimeout(function () {
        loader.hide();
        photos.forEach( function (photo) {
            renderPhoto(photo.avatarUrl,photo.name);    
        }
        );  
    
    }, 1000);


    //console.log('Wynik: ', photos);

    displayMessage(displayText);

}

window.addEventListener('DOMContentLoaded', main);  