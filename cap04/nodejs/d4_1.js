const prompt = require("prompt-sync")();
const A = Number(prompt('Lado A: ')) // 8
const B = Number(prompt('Lado B: ')) // 10
const C = Number(prompt('Lado C: '))  // 12

let maior = Math.max(A,B,C);
let soma = (A + B + C) - maior
let tipo;
if (maior >= soma){
    console.log('Lados não podem formar um triângulo.');
} else{
    console.log('Lados podem formar um triângulo.');
    if (A == B && B == C){
        tipo = "Equilátero";
    } else if (A != B && B != C && A != C){
        tipo = "Escaleno";
    } else {
        tipo = "Isósceles";
    }
    console.log(`Tipo: ${tipo}`);
}