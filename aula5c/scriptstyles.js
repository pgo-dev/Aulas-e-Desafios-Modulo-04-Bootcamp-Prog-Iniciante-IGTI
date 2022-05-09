var caixa = document.getElementById('caixa')
var cx, cy

function setPos(x, y){
  caixa.style.left = x + 'px'
  caixa.style.top = y + 'px'
}

caixa.addEventListener('mousedown', iniciaArraste)

function iniciaArraste(e){

  cx = e.clientX - pxParaNum(caixa.style.left)
  cy = e.clientY - pxParaNum(caixa.style.top)

  caixa.className = "arrastando"
  document.addEventListener('mousemove', arrasta)
}

document.addEventListener('mouseup', terminaArraste)

function terminaArraste(e){
  caixa.className = ""
  document.removeEventListener('mousemove', arrasta)
}

function arrasta(e){
  var x = e.clientX
  var y = e.clientY
  setPos(x-cx, y-cy)
}

function pxParaNum(s){
  return +(s.replace('px', ''))
}

