
function velocidade() {

    // fazer referência aos elementos da página

    var inSpeedAllowed = document.getElementById("inSpeedAllowed");
    var inSpeedDriver = document.getElementById("inSpeedDriver");
    var ouResult = document.getElementById("ouResult");

    // Limpar mensagens (caso segunda execução)

    ouResult.textContent = "";

    //converter conteúdo do campo em número

    var speedDriver = Number(inSpeedDriver.value);
    var allowed = Number(inSpeedAllowed.value);

    // se não preencheu ou Not-aNumber (NaN)
    
    if (allowed == 0 && speedDriver == 0 || isNaN(allowed && speedDriver)) {
        alert("Informe a velocidade corretamente")
        inSpeedAllowed.focus();
        return;

    }

    // fazer as contas

    // fazer as contas

    var abaixo = (allowed * 1);

    var vinte = (allowed * 1.2);

    var cinquenta = (allowed * 1.5);

    var cem = (allowed * 2);


    if (speedDriver <= abaixo) {
        ouResult.textContent = "Velocidade Permitida " + allowed + " km/h";

    } else if (speedDriver >= vinte) {
        ouResult.textContent = "Velocidade 20% do permitido Multa leve " + allowed + " km/h";

    } else if (speedDriver > vinte <= cinquenta) {
        ouResult.textContent = "Velocidade 50% do permitido Multa grave";

    } else if (speedDriver > cinquenta > cem) {
        ouResult.textContent = "Velocidade 100% do permitido gravissíma";

    }


}

// criar referência ao elemento btResult e associar ao evento do botão click

var btResult = document.getElementById("btResult");
btResult.addEventListener("click", velocidade);
