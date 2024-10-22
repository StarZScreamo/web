// Mengambil elemen display
const display = document.getElementById('display');

// Menambah angka atau operator ke display
function appendToDisplay(value) {
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

// Menghapus semua yang ada di display
function clearDisplay() {
    display.innerText = '0';
}

// Menghapus satu karakter terakhir di display
function deleteLast() {
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = '0';
    }
}

// Menghitung hasil dari expression yang ada di display
function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = 'Error';
    }
}
