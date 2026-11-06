const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// "ouvinte de evento"

frm.addEventListener("submit", (e) => {
    const valor = Number(frm.inValor.value) * 100;
    const tempoCliente = Number(frm.inTempo.value);

    const total = Math.ceil(tempoCliente/15) * valor;
    resp.innerText = `Valor a pagar R$ ${(total/100).toFixed(2)}`;

    e.preventDefault();
})