const prompt = require("prompt-sync")();

const peso = Number(prompt('Peso da ração(kg): ')) * 1000; // converte para gramas
const consumo = Number(prompt('Consumo diário (gr): '));

const duracao = Math.floor(peso/consumo);
const sobra = peso - (consumo * duracao);

console.log(`Duração: ${duracao} dias\nSobra: ${sobra} gramas`)