const frm = document.querySelector('form');
const resp = document.querySelector('h3');

// cria um "ouvinte" de evento

frm.addEventListener("submit", (e) => {
    e.preventDefault() // evita o envio do form

    const nome = frm.inNome.value;
    const feminino = frm.inFeminino.checked;
    const altura = Number(frm.inAltura.value);

    let peso;
    if (feminino){
        peso = 21 * Math.pow(altura,2);
    } else{
        peso = 22 * Math.pow(altura,2);
    }

    resp.innerText = `${nome} seu peso ideal é ${peso.toFixed(3)} kg`;
})

frm.addEventListener("reset", () => {
    resp.innerText = ""; // limpa o campo da resposta ao selecionar o botão limpar
})