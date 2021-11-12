export function setStorageData(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
}

export function getStorageData(key) {
    return JSON.parse(localStorage.getItem(key));
}
