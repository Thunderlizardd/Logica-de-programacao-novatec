
function schoolAverage() {

    // criar referencia aos elementos da página

    var inStudentName = document.getElementById("inStudentName");
    var inResultExameOne = document.getElementById("inResultExameOne");
    var inResultExameTwo = document.getElementById("inResultExameTwo");
    var ShowMeExameAverage = document.getElementById("ShowMeExameAverage");
    var showMeApproved = document.getElementById("showMeApproved");

    // obter o conteúdo dos campos de entrada

    var nameStudent = (inStudentName.value);
    var exameOne = Number(inResultExameOne.value);
    var exameTwo = Number(inResultExameTwo.value);

    // calcular os valores

    var averageExame = (exameOne + exameTwo) / 2;

    // criar condição e exibir os resultados


    if (averageExame >= 7) {

        ShowMeExameAverage.textContent = "Média das Notas: " + averageExame.toFixed(1)
        showMeApproved.textContent = "Parabens   " + nameStudent + " !  You was approved"
        showMeApproved.style.color = "green";

    } else if (averageExame >= 4) {

        ShowMeExameAverage.textContent = "Média das Notas: " + averageExame
        showMeApproved.textContent = nameStudent + " you go to the final"
        showMeApproved.style.color = "blue";


    } else {

        ShowMeExameAverage.textContent = "Média das Notas: " + averageExame
        showMeApproved.textContent = nameStudent + " you was disapproved"
        showMeApproved.style.color = "red";

    }



}
// criar referência ao elemento botão

var btShowMeSituation = document.getElementById("btShowMeSituation");

// registrar um evento associado ao botão

btShowMeSituation.addEventListener("click", schoolAverage);

