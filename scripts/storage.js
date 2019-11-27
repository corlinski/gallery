const storage = {
    // 1. zapisywanie
    save (key, value) {
        localStorage.setItem(
            key,
            JSON.stringify(value)
            );
    },
    // 2. formatowanie
    format () {
        localStorage.clear();
    },
    // 3. odczytywanie
    read(key) {
        const text = localStorage.getItem(key);
        return JSON.parse(text);
    }
}

module.exports = storage;