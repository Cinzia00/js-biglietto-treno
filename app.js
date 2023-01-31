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
 const prezzoBiglietto = (kilometri * prezzoAlKm).toFixed(2);
 console.log (prezzoBiglietto);


if (età < 18) {
    //Sconto del 20% per i minorenni
    let scontoMinorenni = ((prezzoBiglietto*20)/100).toFixed(2);
    console.log (scontoMinorenni);
    let prezzoMinorenni = (prezzoBiglietto - scontoMinorenni).toFixed(2);
    console.log (prezzoMinorenni);
} else if (età > 65) {
    //Sconto del 40% per gli over 65
    let scontoOver65 = ((prezzoBiglietto*40)/100).toFixed(2);
    console.log (scontoOver65);
    let prezzoOver65 = (prezzoBiglietto - scontoOver65).toFixed(2);
    console.log (prezzoOver65)
} else {
    prezzoBiglietto
}
    

document.getElementById('tot-biglietto').innerHTML = (prezzoMinorenni || prezzoOver65 || prezzoBiglietto);


