var button = document.getElementById('button')
button.addEventListener('click', resultado)

function resultado(){
  var valor = document.getElementById('valor')
  var pa = document.getElementById('pa')
  var juano = document.getElementById('juano')

  var pm = pa.valueAsNumber*12
  var outputpm = document.getElementById('pm')
  outputpm.value = pm

  var juam = ((juano.valueAsNumber+1)**(1/12)-1)
  var  outputjuam = document.getElementById('juam')
  outputjuam.value = juam

  var juacu = calcjuacu(valor.valueAsNumber, pa.valueAsNumber, juam)

  var outputjuacu = document.getElementById('juacu')
  outputjuacu.value = juacu
}

function calcjuacu(v, prazoa, jam){
  var prazom = prazoa*12
  var amort = v/prazom
  var valorfinal = 0
  var prestacao = 0
 

  for(let i = 0; i<prazom; i++){
    prestacao = amort + (v-i*amort)*jam
    valorfinal = valorfinal + prestacao
  }

  var outputamort = document.getElementsByClassName('amort')
  var outputjuros = document.getElementsByClassName('juros')
  var outputpresta = document.getElementsByClassName('presta')
  
  for(let i = 0; i<5; i++){
    outputamort[i].textContent = (amort).toFixed(2)
    prestacao = (amort + (v-i*amort)*jam).toFixed(2)
    outputpresta[i].textContent = prestacao
    outputjuros[i].textContent = (prestacao - amort).toFixed(2)
  }

  return (valorfinal-v).toFixed(2)
}

