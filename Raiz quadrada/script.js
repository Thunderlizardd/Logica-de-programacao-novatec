

function calcularRaiz() {

    // criar referência aos elementos da página
    var inNumber = document.getElementById("inNumber");
    var outResult = document.getElementById("outResult");

    // obter o conteúdo do campo inNumber
    var number = Number(inNumber.value);

    // se não preencheu ou Not-a-Number (NaN)
    if (number == 0 || isNaN(number)) {
        alert("Informe em número válido..."); // exibir alerta
        inNumber.focus(); // posiciona no campo inNumber
        return; // retorna
    }
    
    var raiz = Math.sqrt(number); //calcaula a raiz quadrada do número
    
    //arredondar para baixo...
    
    if (raiz == Math.floor(raiz)) {
        outResult.textContent = "Raiz: " + raiz; // mostrar a raiz
        
    } else {
        // senão, exibe mensagem indicando que não há raiz exata
        outResult.textContent = "Não há raiz exata para " + number;
 
    }
   
}

 // criar referência ao elemento btresult e registra evento que irá carregagar a function

var btResult = document.getElementById("btResult");
btResult.addEventListener("click", calcularRaiz);