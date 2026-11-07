const prompt = require("prompt-sync")(); // add pacotes para ler a entrada de dados do user
const n1 = Number(prompt('1° num: '));
const n2 = Number(prompt('2° num: '));

console.log(`${n1} + ${n2} = ${n1 + n2}`);