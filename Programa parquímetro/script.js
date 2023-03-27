function parquimetro() {

    // fazer referência aos elementos da página
    var inValor = document.getElementById("inValor");
    var outResult1 = document.getElementById("outResult1");
    var outResult2 = document.getElementById("outResult2");

    // capturar e transformar os valores dos campos
    var valor = Number(inValor.value);

    // verificar campos 

  


    tempo = valor * 5



    outResult1.textContent = "Tempo: " + tempo;
    outResult1.textContent = "Tempo: " + tempo;


}

// criar referência ao elemento btaPagar

var btConfirmar = document.getElementById("btConfirmar");

// registra um evento associado ao botão para carregar um função

btConfirmar.addEventListener("click", parquimetro);

