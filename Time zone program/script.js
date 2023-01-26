

var preco;
var estado;
var icms=0;
var uf;

function calculo(){


    var outResult = document.getElementById("outResult");
    var minutos = document.querySelector("#outMinutos");
    var texto1 = minutos.value;


  preco = parseFloat(document.calculos.preco.value);
  uf = document.getElementById("estado");
  estado = uf.options[uf.selectedIndex].id;

  if (estado=="Italia") {
      icms = preco + 4;
  }else if(estado=="Franca") {
      icms = preco + 4;
  }else if (estado=="EUA") {
      icms = preco - 2;
  }else if (estado=="Japao") {
      icms = preco + 12;
  }else if (estado=="Canada") {
      icms = preco - 2;
  }

  outResult.textContent = 'São '+ icms.toString() +':'+ texto1 + ' no fuso ' + estado 

}