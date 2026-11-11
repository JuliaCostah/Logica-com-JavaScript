const prompt = require("prompt-sync")();
const num = Number(prompt('Número: '));

const parOuImpar = (num % 2 == 0) ? "Par" : "Ímpar";
console.log(`${num} é ${parOuImpar}`);