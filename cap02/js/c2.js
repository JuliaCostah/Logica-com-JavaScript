const frm = document.querySelector('form');
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    const valorQuilo = Number(frm.inBuffet.value) / 1000;
    const consumo = Number(frm.inConsumo.value);

    const total = valorQuilo * consumo;
    resp.innerText = `Valor a pagar R$ ${total.toFixed(2)}`;

    e.preventDefault();
})