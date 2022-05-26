
var parola = prompt("Inserisci una parola");
function palindroma(parola) {

    if (parola.split("").reverse().join("") == parola) {
        alert("La parola è palindroma");
    } else {
        alert("La parola non è palindroma");
    }
}

palindroma(parola);