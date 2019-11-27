const cookies = {
    save(key, value) {
        document.cookie = key + '=' + JSON.stringify(value);
    },
    format() {
        const list = document.cookie.split('; ');
        for (let cookie of list) {
            const key = cookie.split('=')[0];
            document.cookie = key + '=;';
        }
    },
    read(key) {
        const list = document.cookie.split('; ');
        for (let cookie of list) {
            //cookie // jedno ciasteczko
            if (cookie.startsWith(key + '=')) {
                const text = cookie.replace(key + '=', '');
                return JSON.parse(text);
            }
        }
        return null;
    }
}

module.exports = cookies;