const prompt = require("prompt-sync")();
const num = Number(prompt('Número: '))

let quantDivisores = 0;

for(let i = 1; i <= num; i++){
    if (num % i === 0){
        quantDivisores ++
    }
}
if (quantDivisores === 2){
    console.log(`Quatidade de divisores: ${quantDivisores}\n\t'O número é primo'`);
} else {
    console.log(`Quatidade de divisores: ${quantDivisores}\n\t'O número não é primo'`);
}

// otimizando 

const num1 = Number(prompt('Número: '))

let temDivisor = 0; // flag

for(let i = 2; i <= num1/2; i++){
    if(num1 % i === 0){
        temDivisor = 1;
        break;
    }
}
if(num1 > 1 && !temDivisor){
    console.log(`O número é primo`);
} else {
    console.log(`O número não é primo`);
}
