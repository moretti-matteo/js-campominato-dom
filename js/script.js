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
    let numeroInserito = 0;
    do {
        numeroInserito = Number(prompt(`Inserisci un numero tra 1 e 100`));

        if (isNaN(numeroInserito)) {
            alert("Puoi inserire solo numeri, Riprova");
        } else if (rangeNumCheck(numeroInserito)) {
            alert("Puoi inserire solo numeri compresi tra 1 e 100, Riprova");
        } else if (numeriInseriti.includes(numeroInserito)) {
            alert(`Hai già inserito il numero: ${numeroInserito}, Riprova`);
        }

    } while (isNaN(numeroInserito) || rangeNumCheck(numeroInserito) || numeriInseriti.includes(numeroInserito));

    return numeroInserito;

    //controllo se il num inserito sia compreso tra 1 e 100
    function rangeNumCheck(num) {
        return num < 1 || num > 100 ? true : false;
    }
}

function verificaSconfitta(num) {
    return mine.includes(num) ? true : false;
}

function verificaDifficolta(difficolta) {
    let verificaRange = difficolta < 0 || difficolta > 2 ? false : true;
    let verificaNaN = isNaN(difficolta) ? false : true;

    if (!verificaRange) {
        alert("Puoi inserire solo valori compresi tra 0 e 2");
    } else if (!verificaNaN) {
        alert("Puoi inserire solo valori numerici");
    }
    return (verificaRange && verificaNaN);
}

function cambioDifficolta(difficolta) {
    switch (difficolta) {
        case 0:
            return 100;
        case 1:
            return 80;
        case 2:
            return 50;
    }
}

let difficolta = undefined;
const mine = [];
const numeriInseriti = [];
let numeroInserito = 0;
let numMine = 16;
let numTotali = 0;
let score = 0;
let i = 0;


do {
    difficolta = Number(prompt(`
    Inserisci difficoltà:
    difficoltà 0 => tra 1 e 100
    difficoltà 1 => tra 1 e 80
    difficoltà 2 => tra 1 e 50`));

    numTotali = cambioDifficolta(difficolta);

} while (!verificaDifficolta(difficolta));

while (mine.length < numMine) {
    random = randomNumber(1, 100);
    if (!mine.includes(random)) {
        mine.push(random);
    }
}

console.log("Array numeri casuali = " + mine);


while ((i < numTotali - numMine) && (!verificaSconfitta(numeroInserito))) {
    numeroInserito = inserimentoNumero();

    if (verificaSconfitta(numeroInserito)) {
        alert(`hai perso!, Punteggio: ${score}/${numTotali - numMine}`);

    } else {
        numeriInseriti.push(numeroInserito);
        console.log(`Array numeri inseriti: ${numeriInseriti}`);
        score++;
        if (score === numTotali - numMine) {
            alert(`hai vinto! Punteggio = ${score}/${numTotali - numMine}`);
        }
    }

    i++;
}