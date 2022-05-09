const relogio = document.getElementById('relogio')
const btn = document.getElementById('btn')

let interval

function init(){
  relogio.textContent = formataHora(new Date())
  interval = setInterval(() => {
  relogio.textContent = formataHora(new Date())}, 1000)
  btn.textContent = 'Para relógio'
}

function stop(){
  clearInterval(interval)
  interval = undefined
  relogio.textContent = ''
  btn.textContent = 'Inicia relógio'
}

function initOrStop(){
  if (interval){
    stop()
  }else{
    init()
  }
}

btn.addEventListener('click', initOrStop)

function formataHora(date){
  const h = date.getHours().toString().padStart(2, '0')
  const m = date.getMinutes().toString().padStart(2, '0')
  const s = date.getSeconds().toString().padStart(2, '0')
  return `${h}:${m}:${s}`
}