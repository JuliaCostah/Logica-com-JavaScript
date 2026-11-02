//referencia ao form e ao elemento h3 ( que vai exibir a resposta)

const frm = document.querySelector('form');
const resp = document.querySelector('h3');

// adicionando um "ouvinte" de eventos
/*
    Quando o evento de envio (submit) acontecer (ex: ao clicar no botão Mostrar), execute estas instruções*/
frm.addEventListener('submit', (e) => {
    const nome = frm.inNome.value;  // obtem o nome informado no form
    resp.innerText = `Olá, ${nome}`; // exibe a resposta do programa
    e.preventDefault(); // evita o envio do form
})