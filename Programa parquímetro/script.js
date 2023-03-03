function parquimetro() {

    // fazer referência aos elementos da página
    var inValor = document.getElementById("inValor");
    var outResult = document.getElementById("outResult");

    // capturar e transformar os valores dos campos
    var valor = Number(inValor.value);

    // verificar campos 



    if (valor == "" || valor == 0 || valor(isNaN)) {
        alert("Informe um valor válido"); // exibe uma alerta
        inValor.focus();
        return;
    }



    outResult.textContent = valor
}

var btConfirmar = document.getElementById("btConfirmar");
btConfirmar.addEventListener("click", parquimetro);

