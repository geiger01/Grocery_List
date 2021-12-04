export const storageService = {
    saveToStorage,
    loadFromStorage,
    removeFromStorage
}

function saveToStorage(key: string, val: any) {
    localStorage.setItem(key, JSON.stringify(val))
}


function loadFromStorage(key: string): any {
    const val: any= localStorage.getItem(key)
    return JSON.parse(val)
}

function removeFromStorage(key: string) {
    localStorage.removeItem(key);
}