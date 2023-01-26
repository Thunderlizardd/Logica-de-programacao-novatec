

var inHour;
var nameCoutry;
var hour;
var country;

function calculo(){


    var outResult = document.getElementById("outResult");
    var minutos = document.querySelector("#outMinutos");
    var incluirMinutos = minutos.value;


  inHour = parseFloat(document.calculos.inHour.value);
  country = document.getElementById("inCountry");
  nameCoutry = country.options[country.selectedIndex].id;

  if (nameCoutry=="Italia") {
    hour = inHour + 4;
  }else if(nameCoutry=="Franca") {
    hour = inHour + 4;
  }else if (nameCoutry=="EUA") {
    hour = inHour - 2;
  }else if (nameCoutry=="Japao") {
    hour = inHour + 12;
  }else if (nameCoutry=="Canada") {
    hour = inHour - 2;
  }

  outResult.textContent = 'São '+ hour.toString() +':'+ incluirMinutos + ' no fuso do país: ' + nameCoutry 

}