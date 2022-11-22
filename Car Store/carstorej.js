

function carBuy() {

    // criar referência aos elementos da página 

    var inVehicle = document.getElementById("inVehicle");
    var inPrice = document.getElementById("inPrice");
    var outResult1 = document.getElementById("outResult1");
    var outResult2 = document.getElementById("outResult2");
    var outResult3 = document.getElementById("outResult3");

    // obter conteudos dos campos de entrada

    var inVehicle = inVehicle.value;
    var inPrice = Number(inPrice.value);
    
    // realizar as operações

    var outPrice1 = inPrice * 0.4;
    var outPrice2 = (inPrice * 0.7) / 48;


    // alterar o conteúdo dos parágrafos de resposta

    outResult1.textContent = "Promoção: " + inVehicle;              
    outResult2.textContent = "Entrada de R$ " + outPrice1.toFixed(2);
    outResult3.textContent = "+ 48x R$ " + outPrice2.toFixed(2);
   
}

// Criar referência ao elemento btInShowMeSale botão

var btInShowMeSale = document.getElementById("btInShowMeSale");

// registrar um evento associado ao botão, para carregar uma função

btInShowMeSale.addEventListener("click", carBuy);


