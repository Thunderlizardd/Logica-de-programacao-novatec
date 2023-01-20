function calculationHeight() {

    // criar referência aos elementos da página

    var inUserName = document.getElementById("inUserName");
    var inMale = document.getElementById("inMale");
    var inFemale = document.getElementById("inFemale");
    var inHeight = document.getElementById("inHeight");
    var outResult = document.getElementById("outResult");

    // obter os valores dos capos de edição da página

    var userName = inUserName.value;
    var isMale = inMale.checked;
    var isFemale = inFemale.checked;
    var yourHeight = Number(inHeight.value);

    // verificar se o nome foi preenchido e o sexo foi selecionado

    if (userName == "" || (isMale == false && isFemale == false)) {
        alert(" Por favor, informe o nome e selecione o sexo... ");
        inUserName.focus(); // joga o foco no campo de edição inUserName)
        return;
    }

    // se altura estiver vazio (0) NaN (Not-a-Number) ou um texto for informado por exemplo

    if (yourHeight == 0 || isNaN(yourHeight)) {
        alert(" Por favor, informe a altura corretamente... ");
        inHeight.focus();
        return;
    }

    // se isMale (significa se isMale == true)

    if (isMale) {
        var height = (22 * Math.pow(yourHeight, 2)); // Math.pow eleva ao quadrado
    } else {
        var height = (21 * Math.pow(yourHeight, 2));
    }

    // apresentar a resposta (alterar o conteudo da linha outResult)

    outResult.textContent = userName + ": Seu peso ideal é " + height.toFixed(2) + " kg";

    // criar referência ao elemento btCalculate e registra evento associado a Calcule Height
}

var btCalculate = document.getElementById("btCalculate");
btCalculate.addEventListener("click", calculationHeight);
function clearDados() {

    // limpar os conteúdos dos elementos
    document.getElementById("inUserName").value = "";
    document.getElementById("inMale").checked = false;
    document.getElementById("inFemale").checked = false;
    document.getElementById("inHeight").value = "";
    document.getElementById("outResult").textContent = "";

    // posiciona (joga o foco) no elemento inUserName

    document.getElementById("inUserName");

}

var btClear = document.getElementById("btClear");
btClear.addEventListener("click", clearDados);

function clearDados() {
   
    // limpa o conteudo da página
    location.reload();
    
    //posiciona (joga o foco) no elemento inUserName
   
    document.getElementById("inUserName").focus();

}

var btClear = document.getElementById("btClear");
btClear.addEventListener("click", clearDados);



