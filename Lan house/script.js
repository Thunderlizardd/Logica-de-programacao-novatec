
function lanHouse () {

    // criar referência aos elementos da página

    var inLabelValorUso = document.getElementById ("inLabelValorUso");
    var inLabelTempoUso = document.getElementById ("inLabelTempoUso");
    var outResult1 = document.getElementById ("outResult1");

    // obter valores dos campor de entrada

    var valorUso = Number(inLabelValorUso.value);
    var tempoUso = Number (inLabelTempoUso.value);

    // executar os cálculos

    var calc1 = Math.ceil(tempoUso / 15);
    var calc2 = valorUso * calc1;

    // alterar o conteúdo dos parágrafos

    outResult1.textContent = "Valor a pagar R$ " + calc2;
 

}

// criar referência ao elemento btaPagar

var btaPagar = document.getElementById("btaPagar");

// registra um evento associado ao botão para carregar um função

btaPagar.addEventListener("click",lanHouse);
