/*1*/
const dora = {
    nome: 'dora',
    raca: 'vira-lata',
    idade: 1,
    latir: function(){
        console.log('dorinha gosta de morder muito!');
    },
}
dora.latir();

/*2*/
let vetor = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
vetor[vetor.length - 1] = undefined;
console.log(vetor);

/*3*/
var frutas = new Array("melancia", "abacaxi", "pera", "banana", "morango");
console.log(frutas.join(" - "));

/*4*/
var times = new Array("palmeiras", "vasco", "corinthians");
console.log(typeof times);