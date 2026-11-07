const prompt = require("prompt-sync")();
const veiculo = prompt('Nome Veículo: ');
const preco = Number(prompt('Preço: R$ ')) * 100;

const entrada = preco * (50/100);
const parcelas = entrada / 12;

console.log(`Promoção: ${veiculo}\nEntrada de R$: ${(entrada/100).toFixed(2)}`);
console.log(`+ 12x de R$ ${(parcelas/100).toFixed(2)}`);