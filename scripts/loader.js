// obiekt z funckjami czyli metodami obiektu

const loader = {
    show() {
        // 1. Stworzenie 
        const $loader = document.createElement('img');
        $loader.src = 'images/831.svg';
        $loader.id = 'loader';
        // 2. renderowanie
        const $main = document.querySelector('main');
        $main.append($loader);
    },
    hide() {
        // 1. lokalizacja
        const $loader = document.querySelector('#loader');
        // 2. usuwanie
        $loader.remove();
    }
};