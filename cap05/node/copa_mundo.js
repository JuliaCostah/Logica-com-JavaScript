const prompt = require("prompt-sync")();
do {
    let ano = prompt("Informe o ano: (Digite zero para sair) ");
    if (ano == 0){
        break
    }
    else if (ano == 1942 || ano == 1946){
        console.log(`Não houve Copa em ${ano} devido a Segunda Guerra Mundial.`);
    } else if (ano >= 1930 && ano % 4 == 2){
        console.log(`Sim! ${ano} é ano de Copa.`);
    } else {
        console.log(`Não... ${ano} não é ano de Copa.`);
    }
} while(true);