

function sale() {

    // Criar referência aos elementos da página

    var inDrug = document.getElementById("inDrug");
    var inPrice = document.getElementById("inPrice");
    var outDrug = document.getElementById("outDrug");
    var outPrice = document.getElementById("outPrice");
    
    // obter conteúdo dos campos de entranda

    var inDrug = inDrug.value;
    var inPrice = Number(inPrice.value);

    // calcular os valores

    var price = Math.floor(inPrice * 2);


    // alterar o conteúdo da linha de resposta

    outDrug.textContent = "Promoção " + inDrug;
    outPrice.textContent = "leve 2 por apenas R$ " + price;

}

// criar referência do botão

var btShowMe = document.getElementById("btShowMe");

// registra um evento associado ao botão para carregar uma função

btShowMe.addEventListener("click", sale);








