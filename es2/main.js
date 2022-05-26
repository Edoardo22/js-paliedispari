
let pariDispari = prompt('Scegli pari o dispari');
let numeroUtente = parseInt(prompt('Scegli un numero da 1 a 5'));
let numeroComputer = generaNumero();
let somma = sommaNumeri(numeroUtente, numeroComputer);

function sommaNumeri(num1, num2) {
    return num1 + num2;
}
function generaNumero() {
    return Math.floor(Math.random() * 5) + 1;
}

function sommaPariDispari(somma) {
    if (somma % 2 == 0) {
        return 'Pari';
    } else {
        return 'Dispari';
    }
}

if (pariDispari == 'pari') {
    if (somma % 2 == 0) {
        alert('Hai vinto!');
    } else {
        alert('Hai perso!');
    }
}

else if (pariDispari == 'dispari') {
    if (somma % 2 == 0) {
        alert('Hai perso!');
    } else {
        alert('Hai vinto!');
    }
}

console.log(sommaPariDispari(somma));
console.log(somma);
console.log(`hai scelto ${numeroUtente} `);
console.log(`il computer ha scelto ${numeroComputer} `);
