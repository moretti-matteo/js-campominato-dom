// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50
//--------------------------------------------------------


//Genero un numero casuale tra un MIN e un MAX
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + 1;
}


//Chiedo all'utente di inserire un numero.
//verifico che sia effettivamente un numero.
//verifico se quel numero sia compreso tra 1 e 100.
//verifico se quel numero sia un numero già inserito precedentemente
function inserimentoNumero() {

    do {
        numeroInserito = Number(prompt("Inserisci un numero tra 1 e 100"));

        if (isNaN(numeroInserito)) {
            alert("Puoi inserire solo numeri, Riprova");
        } else if (rangeNumCheck(numeroInserito)) {
            alert("Puoi inserire solo numeri compresi tra 1 e 100, Riprova");
        } else if (numeriInseriti.includes(numeroInserito)) {
            alert(`Hai già inserito il numero: ${numeroInserito}, Riprova`);
        }

    } while (isNaN(numeroInserito) || rangeNumCheck(numeroInserito) || numeriInseriti.includes(numeroInserito));

    //controllo se il num inserito sia compreso tra 1 e 100
    function rangeNumCheck(num) {
        return num < 1 || num > 100 ? true : false;
    }
}

function verificaSconfitta(num) {
    return mine.includes(num) ? true : false;
}

const mine = [];
let numMine = 16;
const numeriInseriti = [];
let numeroInserito = 0;
let score = 0;

while (mine.length < numMine) {
    random = randomNumber(1, 100);
    if (!mine.includes(random)) {
        mine.push(random);
    }
}

console.log("Array numeri casuali = " + mine);

for (let i = 0; i < (100 - numMine); i++) {

    inserimentoNumero();

    if (verificaSconfitta(numeroInserito)) {
        alert(`hai perso!, Punteggio: ${score}`);
        break;
    } else {
        score++;
    }

    numeriInseriti.push(numeroInserito);
    console.log(`Array numeri inseriti: ${numeriInseriti}`);
}

