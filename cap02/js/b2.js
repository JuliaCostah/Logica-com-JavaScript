const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

frm.addEventListener("submit", (e) => {
    const nomeVeiculo = frm.inVeiculo.value;
    const preco = Number(frm.inPreco.value) * 100;

    const valorEntrada = preco * (50/100);
    const saldo12x = valorEntrada/12;

    resp1.innerHTML = `<i>Promoção: ${nomeVeiculo}`;
    resp2.innerHTML = `<i>Entrada: R$ ${(valorEntrada/100).toFixed(2)}`;
    resp3.innerHTML = `<i> +12x de R$ ${(saldo12x/100).toFixed(2)}`;

    e.preventDefault();
})