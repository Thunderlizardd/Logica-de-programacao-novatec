function qtdCedulas() {

    // cria um referência aos elementos da página
    var inSaque = document.getElementById("inSaque");
    var outCedulaCem = document.getElementById("outCedulaCem");
    var outCedulaCinquenta = document.getElementById("outCedulaCinquenta");
    var outCedulaDez = document.getElementById("outCedulaDez");

    // limpar mensagens (caso, segunda execução)

    outCedulaCem.textContent = "";
    outCedulaCinquenta.textContent = "";
    outCedulaDez.textContent = "";

    var saque = Number(inSaque.value); // converter conteudo do campo inSaque

    // se não preencheu ou Not-a-Number (NaN)

    if (saque % 10 != 0) {
        alert("Valor inválido para notas disponíveis (R$ 10, 50, 100)");
        inSaque.focus();
        return;
    }

    // calcular notas de 100, 50, 10
    var cedulaCem = Math.floor(saque / 100);
    var resto = saque % 100
    var cedulaCinquenta = Math.floor(resto / 50);
    resto = resto % 50;
    var cedulaDez = Math.floor(resto / 10);

    // exibir as notas apenas se houver
    if (cedulaCem > 0) {
        outCedulaCem.textContent = "Notas de R$ 100: " + cedulaCem;
    }
    if (cedulaCinquenta > 0) {
        outCedulaCinquenta.textContent = "Notas de R$ 50: " + cedulaCinquenta;
    }
    if (cedulaDez > 0) {
        outCedulaDez.textContent = "Notas de R$ 10: " + cedulaDez;
    }

}

// criar referência ao elemento btExibir e associar a function ao evento click

var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", qtdCedulas);
