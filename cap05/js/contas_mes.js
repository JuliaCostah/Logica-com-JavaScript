const frm = document.querySelector("form");
const resp1 = document.getElementById("outResp1");
const resp2 = document.getElementById("outResp2");

let resposta = "";
let quantContas = 0;
let valTotal = 0;
frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const conta = frm.inConta.value;
    const valor = Number(frm.inValor.value);

    quantContas ++;
    valTotal += valor;
    resposta += `${conta} - R$ ${valor.toFixed(2)}\n`
    resp1.innerText = `${resposta}-----------------------------------------`;
    resp2.innerText = `${quantContas} Conta(s) - Total R$ ${valTotal.toFixed(2)}`;

    frm.inConta.value = "";
    frm.inValor.value = "";
    frm.inConta.focus() = "";
})