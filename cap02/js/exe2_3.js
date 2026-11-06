const frm = document.querySelector("form");
const resp1 = document.getElementById("outResp1");
const resp2 = document.getElementById("outResp2");

frm.addEventListener("submit", (e) => {
    const nomeProd = frm.inProd.value;
    const preco = Number(frm.inPreco.value) * 100;

    const promo = preco * (50/100);
    const total = (preco * 3) - promo;

    resp1.innerText = `${nomeProd} - Leve 3 por R$ ${(total/100).toFixed(2)}`;
    resp2.innerText = `O 3° produto custa apenas R$ ${(promo/100).toFixed(2)}`;

    e.preventDefault();
})
