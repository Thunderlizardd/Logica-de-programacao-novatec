function heWego() {

        // criar referência com os objetos da página

        var inProduct = document.getElementById("inProduct");
        var inPrice = document.getElementById("inPrice");
        var outResult = document.getElementById("outResult");
        var outResult1 = document.getElementById("outResult1");

        // obter o conteudo dos campos de entrada

        var product = (inProduct.value);
        var price = Number(inPrice.value);

        // calcular os valores

        var calc1 = price / 2;
        var calc2 = calc1 + (price * 2);

        // alterar o conteudo da linha de resposta

        outResult.textContent = product + " - Promoção: Leve 3 por R$ " + calc2;
        outResult1.textContent = "O 3º produto custa apenas R$ " + calc1;

}

        // criar referência ao elemento 

        var btShowMeSale = document.getElementById("btShowMeSale");

        // registra um evento associado ao botão, para carregar uma função

        btShowMeSale.addEventListener("click", heWego);