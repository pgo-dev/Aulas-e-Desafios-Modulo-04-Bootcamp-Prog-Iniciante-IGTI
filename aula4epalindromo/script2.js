function palindromo(s){
  var frase = s.toLowerCase().trim()
  var l = frase.length
  
  for(var i = 0; i<(frase.length/2); i++){
    if (frase[i] != frase[frase.length-1-i]){
      console.log(`${s.trim()} não é um palíndromo`)
      return
    }
  }
  
  console.log(`${s.trim()} é um palíndromo`)
  
}

