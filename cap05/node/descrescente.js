const prompt = require("prompt-sync")();
const num = Number(prompt("Número: "));

let res = "";

for (let i = num; i > 1; i--){
    res += `${i},`
}
res = `${res}1.`
console.log(`Entre ${num} e 1: ${res}`);