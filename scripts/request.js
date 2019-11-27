function makeRequest (url) {
    console.log('makeRequest()');
    return fetch(url)  // Promise A
        .then( /* handler bedacy referencja (mozna podac nazwe funkcji) */ function (result) {
            console.log('udalo sie');
            console.log(result);
            if (result.ok) {
                return result.json();  // zwraca Promise B
            } else {
                throw new Error(result.statusText);
            }
        }) 
}

module.exports = makeRequest;