console.log ('ciao')

//Chiedere i kilometri che deve percorrere
const kilometri = prompt('Quanti kilometri devi percorrere?');
console.log (kilometri);

//Chiedere età passeggero
const età = prompt('Quanti anni hai?');
console.log (età);

const prezzoAlKm = (0.21);

//Calcolare prezzo totale del biglietto
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
 let prezzoBigliettoGenerico = (kilometri * prezzoAlKm);
 let prezzoTotale;

if (età < 18) {
    //Sconto del 20% per i minorenni
    let scontoMinorenni = ((prezzoBigliettoGenerico*20)/100);
    console.log (scontoMinorenni);
    prezzoTotale = (prezzoBigliettoGenerico - scontoMinorenni).toFixed(2);
    console.log (prezzoTotale);
} else if (età > 65) {
    //Sconto del 40% per gli over 65
    let scontoOver65 = ((prezzoBigliettoGenerico*40)/100);
    console.log (scontoOver65);
    prezzoTotale = (prezzoBigliettoGenerico - scontoOver65).toFixed(2);
    console.log (prezzoTotale)
} else {
    prezzoTotale = prezzoBigliettoGenerico;
}
    

document.getElementById('tot-biglietto').innerHTML = prezzoTotale;


