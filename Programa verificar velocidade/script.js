
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

    if (speedDriver <= allowed) {
        ouResult.textContent = " Velocidade: " + speedDriver + "km/h - Sem Multa até o limite da via."
    } else {
        let vinte = allowed * 1.2
        if (speedDriver <= vinte) {
            ouResult.textContent = " Velocidade: " + speedDriver + "km/h - Multa Leve trafegar até 20% acima do permitido."
        } else {
            let cinquenta = allowed * 1.5
            if (speedDriver <= cinquenta) {
                ouResult.textContent = " Velocidade: " + speedDriver + "km/h - Multa Grave trafegar até 50% acima do permitido."
            } else {
                let cem = allowed * 2
                if (speedDriver <= cem)
                ouResult.textContent = " Velocidade: " + speedDriver + "km/h - Multa Gravissíma trafegar até 100% acima do permitido."
            } 

        }
    }


}


// criar referência ao elemento btResult e associar ao evento do botão click

var btResult = document.getElementById("btResult");
btResult.addEventListener("click", velocidade);
