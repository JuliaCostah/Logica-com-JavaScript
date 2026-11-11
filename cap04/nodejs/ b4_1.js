const prompt = require("prompt-sync")();
const velPermitida = Number(prompt("Velocidade permitida: "));
const velCondutor = Number(prompt("Velocidade do condutor: "));

let situacao;
if (velCondutor <= velPermitida){
    situacao = "Sem multa";
} else if ((velCondutor - velPermitida) <= (velPermitida * (20/100))){
    situacao = "Multa leve";
} else{
    situacao = "Multa Grave";
}
console.log(`Situação: ${situacao}`);