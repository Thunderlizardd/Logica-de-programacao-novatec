
function schoolAverage() {

    // criar referencia aos elementos da página

    var inStudentName = document.getElementById("inStudentName");
    var inResultExameOne = document.getElementById("inResultExameOne");
    var inResultExameTwo = document.getElementById("inResultExameTwo");
    var ShowExameAverage = document.getElementById("ShowExameAverage");
    var showMeApproved = document.getElementById("showMeApproved");

    // obter o conteúdo dos campos de entrada

    var nameStudent = (inStudentName.value);
    var exameOne = Number(inResultExameOne.value);
    var exameTwo = Number(inResultExameTwo.value);

    // calcular os valores

    var averageExame = (exameOne + exameTwo) / 2;
        
    // criar condição e exibir os resultados


    if (averageExame >= 7) {

        ShowExameAverage.textContent = "Média das Notas: " + averageExame
        showMeApproved.textContent = "Parabens   " + nameStudent + " !  You was approved"

    } else {
 
        if (averageExame < 7) {

            ShowExameAverage.textContent = "Média das Notas: " + averageExame
            showMeApproved.textContent = nameStudent + " you was disapproved"

        }

    }

}
// criar referência ao elemento botão

var btShowMeSituation = document.getElementById("btShowMeSituation");

// registra um evento associado ao botão

btShowMeSituation.addEventListener("click", schoolAverage);

