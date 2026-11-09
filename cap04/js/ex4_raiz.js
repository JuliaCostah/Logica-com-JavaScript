const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const num = Number(frm.inNum.value);
    let raiz = Math.sqrt(num);

    if (Number.isInteger(raiz)){ // ou if (raiz % 1 == 0)
        resp.innerText = `Raiz: ${raiz}`;
    } else{
        resp.innerText = `A raiz não é exata... ${raiz.toFixed(5)}`
    }
})