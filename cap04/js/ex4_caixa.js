const frm = document.querySelector("form");
const resp1 = document.getElementById("outResp1");
const resp2 = document.getElementById("outResp2");
const resp3 = document.getElementById("outResp3");

frm.addEventListener("submit", (e) => {
    const saque = Number(frm.inSaque.value);

    if (saque % 10 != 0){ // se saque não é múltiplo de 10
        alert(`Valor inválido para as notas disponíveis -> 100, 50 e 10`);
        frm.inSaque.focus();
        return
    }
    resp1.innerText = "";
    resp2.innerText = "";
    resp3.innerText = "";

    const notas100 = Math.floor(saque/100);
    let resto = saque % 100;
    const notas50 = Math.floor(resto/50);
    resto = resto % 50;
    const notas10 = Math.floor(resto/10);

    if (notas100 > 0) {
        resp1.innerText = `Notas de R$ 100: ${notas100}`
    }
    if (notas50 > 0) {
        resp2.innerText = `Notas de R$ 50: ${notas50}`
    } 
    if (notas10 > 0) {
        resp3.innerText = `Notas de R$ 10: ${notas10}`
    } 

    e.preventDefault()
})
