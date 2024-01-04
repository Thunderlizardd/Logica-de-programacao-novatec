
function sidesOfaTriangle() {

    // create reference to the elements of the page

    var inSideA = document.getElementById("inSideA");
    var inSideB = document.getElementById("inSideB");
    var inSideC = document.getElementById("inSideC");
    var showMeResult1 = document.getElementById("showMeResult1");
    var showMeResult2 = document.getElementById("showMeResult2");

    // get content of the entrance filds 

    var sideA = Number(inSideA.value);
    var sideB = Number(inSideB.value);
    var sideC = Number(inSideC.value);
    
    // calculate the values

if (sideA > sideB + sideC || sideB > sideA + sideC || sideC > sideA+ sideB) {
    showMeResult1.textContent = "Não é possível formar um triângulo"
} else {
    showMeResult1.textContent = "É possivel formar um triângulo"    
    if (sideA == sideB && sideA == sideC) {
    showMeResult2.textContent = "Triângulo Equilátero"
    } else if (sideA == sideB || sideA == sideC || sideB == sideC) {
    showMeResult2.textContent = "Triângulo Isósceles"    
    } else {
        showMeResult2.textContent = "Triângulo Escaleno"
    }

 }

}



// criar referência ao elemento botão

var btShowMeResult = document.getElementById("btShowMeResult");

// registrar um evento associado ao botão

btShowMeResult.addEventListener("click", sidesOfaTriangle);