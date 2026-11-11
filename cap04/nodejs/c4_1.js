const prompt = require("prompt-sync")();
const valor = Number(prompt('Valor: R$ '));

let tempo;
let troco;
if (valor < 1.00) {
    console.log('Valor Insuficiente');
} else {
    if (valor < 1.75) {
        tempo = "30 min";
        troco = valor - 1.00;
    } else if (valor < 3.00){
        tempo = "60 min";
        troco = valor - 1.75;
    } else {
        tempo = "120 min";
        troco = valor - 3.00;
    }
    console.log(`Tempo: ${tempo}\nTroco: R$ ${troco.toFixed(2)}`);
}