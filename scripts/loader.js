// obiekt z funckjami czyli metodami obiektu

const loader = {
    show() {
        console.log('loader.show');
        // 1. Stworzenie 
        // const $loader = document.createElement('img');
        // $loader.src = 'images/831.svg';
        // $loader.id = 'loader';
        // 2. renderowanie
        document.getElementById("loaderPlc").src =  'images/831.svg';
        //const $main = document.querySelector('#loaderPlc');
        //$main.append($loader);
    },
    hide() {
        console.log('loader.hide');
        // 1. lokalizacja
        const $loader = document.querySelector('#loaderPlc');
        // 2. usuwanie
        $loader.remove();
    }
};

//exportowanie obiektu "loader"
module.exports = loader;