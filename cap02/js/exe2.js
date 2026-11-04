const frm = document.querySelector("form");
const resp1 = document.querySelector("#inResp1");
const resp2 = document.querySelector("#inResp2");

frm.addEventListener("submit", (e) => {
    const medicamento = frm.inMed.value;
    const preco = Number(frm.inPreco.value);

    const promocao = Math.floor(preco*2);
    resp1.innerText = `Promoção de ${medicamento}`;
    resp2.innerText = `Leve 2 por apenas R$ ${promocao.toFixed(2)}`;
    
    e.preventDefault();
})