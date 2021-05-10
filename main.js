/* Snack 1:
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
 */

var zucchine = [
    {
        varietà: "Nera di Milano",
        peso: 0.6,
        lunghezza: 12

    }
    ,
    {
        varietà: "Alberello",
        peso: 0.5,
        lunghezza: 10

    }
    ,
    {
        varietà: "Tonda di Nizza",
        peso: 1,
        lunghezza: 11

    }
    ,
    {
        varietà: "Trombetta d'Albenga",
        peso: 0.6,
        lunghezza: 12

    }
    ,
    {
        varietà: "Lunghe fiorentine",
        peso: 0.8,
        lunghezza: 9

    }
    ,
    {
        varietà: "Zucchino giallo Golden",
        peso: 0.6,
        lunghezza: 14

    }
    ,
    {
        varietà: "Ortolano di Faenza",
        peso: 0.5,
        lunghezza: 12

    }
    ,
    {
        varietà: "Romanesco",
        peso: 0.7,
        lunghezza: 15

    }
    ,
    {
        varietà: "Striato di Napoli",
        peso: 0.3,
        lunghezza: 16

    }
    ,
    {
        varietà: "Siciliano",
        peso: 1.1,
        lunghezza: 18

    }
]

//Calcola quanto pesano tutte le zucchine.
var zucchineWeight = 0;
for (var i = 0; i < zucchine.length; i++) {
    zucchineWeight += zucchine[i].peso;
    console.log(zucchineWeight);
}
console.log("il peso totale delle Zucchine è: " + Math.round(zucchineWeight * 100) / 100);

/* Snack 2:
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.
 */
var shorterZucchine = [];
var longerZucchine = [];

for (var i = 0; i < zucchine.length; i++) {
    var zucchineEl = zucchine[i];
    if (zucchineEl.lunghezza < 15) {
        shorterZucchine.push(zucchineEl);
    } else {
        longerZucchine.push(zucchineEl)
    }
}
console.log(shorterZucchine);
console.log(longerZucchine);
var shorterWeight = 0;
var longerWeight = 0;

for (var i = 0; i < shorterZucchine.length; i++) {
    shorterWeight += shorterZucchine[i].peso;
}
console.log("il peso delle zucchine più corte è: "+ shorterWeight);

for (var i = 0; i < longerZucchine.length; i++) {
    longerWeight += longerZucchine[i].peso;
}
console.log("il peso delle zucchine più lunghe è: "+ longerWeight);