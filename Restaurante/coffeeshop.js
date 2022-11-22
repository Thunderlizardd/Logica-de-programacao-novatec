


function payable() {

// criar referência aos elementos HTML

var inPriceKg = document.getElementById("inPriceKg");
var inGramas = document.getElementById("inGramas");
var result1 = document.getElementById("result1");

// obter conteúdos dos campos de entrada

var inPriceKg = Number(inPriceKg.value);
var inGramas  = Number(inGramas.value);

// fazer os cálculos

all = inPriceKg *(inGramas/1000) 

// alterar o conteudo dos parágrafos

result1.textContent = "Valor total a pagar R$ " + all.toFixed(2);

}

// criar um referência ao elemento botão btCalcPrice 

var btCalcPrice = document.getElementById("btCalcPrice");

// registrar um evento associado ao botão btCalcPrice

btCalcPrice.addEventListener("click", payable);

