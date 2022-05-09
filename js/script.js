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

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + 1;
}


const mine = [];
let numMine = 16;

while (mine.length < numMine) {
    random = randomNumber(1, 100);
    if (!mine.includes(random)) {
        mine.push(random);
    }
}

console.log("Array numeri casuali = " + mine);

const numeriInseriti = [];
let numeroInserito = 0;

for (let i = 0; i < (100 - numMine); i++) {
    do {
        numeroInserito = Number(prompt("Inserisci un numero tra 1 e 100"));
        if (isNaN(numeroInserito)) {
            alert("Puoi inserire solo numeri, Riprova");
        } else if (numeroInserito < 1 || numeroInserito > 100) {
            alert("Puoi inserire solo numeri compresi tra 1 e 100");
        } else if (numeriInseriti.includes(numeroInserito)) {
            alert(`Hai già inserito il numero: ${numeroInserito}`);
        }

    } while (isNaN(numeroInserito) || numeroInserito < 1 || numeroInserito > 100 || numeriInseriti.includes(numeroInserito));

    if (mine.includes(numeroInserito)) {
        alert("Hai perso");
        break;
    }
    
    numeriInseriti.push(numeroInserito);
    console.log(`Array numeri inseriti: ${numeriInseriti}`);


}

