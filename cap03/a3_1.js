const prompt = require("prompt-sync")();
const salario = Number(prompt('Salário: R$')) * 100;
const tempo = Number(prompt('Tempo de Empresa: '));

const quadrienios = Math.floor(tempo/4);
const acrescimo = salario * (quadrienios/100);

console.log(`Quadriênios: ${quadrienios}\nSalário Final: R$ ${((salario + acrescimo)/100).toFixed(2)}`);