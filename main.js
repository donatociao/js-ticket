var km = prompt('Quanti km devi percorrere?'); //kilometri da percorrere
var anni = prompt('Quanti anni hai?'); //anni passeggero
var prezzo = km * 0.21; //Tariffa 0.21 €/km

if (anni < 18) { //se il passeggero è minorenne
  var scontominori = prezzo / 1.20; //sconto 20%
  console.log('Il costo del biglietto intero è ' + prezzo + ' €');
  console.log('La tariffa ridotta per i minorenni è di ' + scontominori + ' €');
}

else if (anni > 65) { //se il passeggero è Over65
  var scontoover = prezzo / 1.40; //sconto 40%
  console.log('Il costo del biglietto intero è di ' + prezzo + ' €');
  console.log('La tariffa ridotta per gli over 65 è di ' + scontoover + ' €');
}

else {
  console.log('Il costo del biglietto intero è di ' + prezzo + ' €');
}