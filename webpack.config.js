console.log(__dirname);
module.exports = {
    //Srodowisko
    mode: "development",
    // plik wejsciowy
    entry: 
        __dirname + '/scripts/main.js',
    // wyjsciowy
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    }
}
