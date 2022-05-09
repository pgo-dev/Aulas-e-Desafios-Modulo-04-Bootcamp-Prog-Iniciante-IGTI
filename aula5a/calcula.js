var n1 = document.getElementById('n1')
var n2 = document.getElementById('n2')
var res = document.getElementById('r')

function calcula(){
  var resultado = n1.valueAsNumber + n2.valueAsNumber
  res.textContent = isNaN(resultado) ? '.' : resultado
}



