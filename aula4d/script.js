function maior(a, b){
  if (a > b){
    return a
  }else if (b>a){
    return b
  }else{
    return 'Os números são iguais'
  }
}

function menor(a, b,c ){
  return (a < b && a < c) ? a : (b<a && b<c) ?  b : c 
}

function formataMes(mes){
  switch(mes){
    case 1:
      var mes = 'Janeiro'
      break
    case 2:
      var mes = 'Fevereiro'
      break
    case 3:
      var mes = 'Março'
      break
    case 4:
      var mes = 'Abril'
      break
    case 5:
      var mes = 'Maio'
      break
    case 6:
      var mes = 'Junho'
      break
    case 7:
      var mes = 'Julho'
      break
    case 8:
      var mes = 'Agosto'
      break
    case 9:
      var mes = 'Setembro'
      break
    case 10:
      var mes = 'Outubro'
      break
    case 11:
      var mes = 'Novembro'
      break
    case 12:
      var mes = 'Dezembro'
      break
    default:
      var mes = 'Digite uma opção válida'
  }
  return mes
}
