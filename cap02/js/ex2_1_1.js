const frm = document.querySelector('form');
const resp = document.querySelector('h3');
const resp1 = document.querySelector('h4');

frm.addEventListener('submit', (e) => {
    const nome = frm.inNome.value;
    const idade = frm.inIdade.value;
    resp.innerText = `Nome: ${nome}\nIdade: ${idade}`;
    resp1.innerHTML = '<i>Até logo!</i>';
    e.preventDefault();
})