const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = frm.inNome.value;
    const n1 = Number(frm.inN1.value);
    const n2 = Number(frm.inN2.value);

    const media = (n1 + n2)/2;
    resp1.innerText = `Média das Notas: ${media.toFixed(2)}`;
    
    if (media >= 7.0){
        resp2.innerText = `Aluno(a) ${nome} Aprovado(a).`;
        resp2.style.color = "green";
    } else if (media>=4.0){
        resp2.innerText = `Aluno(a) ${nome} em Recuperação.`
        resp2.style.color = "blue";
    } else{
        resp2.innerText = `Aluno(a) ${nome} Reprovado(a).`
        resp2.style.color = "red";
    }
})