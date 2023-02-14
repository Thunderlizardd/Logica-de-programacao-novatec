function parOuImpar() {

    // criar referência aos elementos da pagina

    var inNumber = document.getElementById("inNumber");
    var outResult1 = document.getElementById("outResult1");

    // converter conteudo inNumber

    var number = Number(inNumber.value);

    // testar se é ímpar ou par


    if (number % 2 != 0) {
        outResult1.textContent = "O número: " + number + " ímpar ";

    } else {
        outResult1.textContent = "O número " + number + " par ";

    }

}

    // criar referência ao botão btExibir

    var btExibir = document.getElementById ("btExibir");
    btExibir.addEventListener ("click", parOuImpar);
