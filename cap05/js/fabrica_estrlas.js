const frm = document.querySelector("form");
const resp1 = document.getElementById("outResp");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const num = Number(frm.inSimbolos.value);

    let estrelas = "";
    for (let i = 1; i <= num;i++ ){
        if (i % 2 == 1){
            estrelas += "*";
        } else{
            estrelas += "_";
        }
    }
    resp1.innerText = estrelas;
})