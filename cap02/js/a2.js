// referencia aos elementos
const frm = document.querySelector('form')
const resp1 = document.querySelector('h3')
const resp2 = document.querySelector('h4')

//// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener('submit',(e) => {
    const filme = frm.inTitulo.value;
    const duracao = Number(frm.inDuracao.value);

    const horas = Math.floor(duracao / 60);
    const min = duracao % 60;

    resp1.innerText = filme;
    resp2.innerText = `${horas} hora(s) e ${min} minuto(s)`;
    e.preventDefault();
})