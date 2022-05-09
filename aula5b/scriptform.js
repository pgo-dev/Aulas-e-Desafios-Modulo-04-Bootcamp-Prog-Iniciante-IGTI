var fslist = document.querySelectorAll('.multiple-field')
for(var i = 0; i < fslist.length; i++){
  initMultipleFieldset(fslist[i])
}

function initMultipleFieldset(fs){
  var addbutton = document.createElement('button')
  addbutton.textContent = 'Adicionar'
  addbutton.type = 'button'

  fs.appendChild(addbutton)

  var firstinput =  fs.querySelector('input')

  addbutton.addEventListener('click', function(){
    var newinput = document.createElement('input')
    var div = document.createElement('div')
    newinput.name = firstinput.name
    newinput.type = firstinput.type

    var deletebutton = document.createElement('button')
    deletebutton.textContent = 'Excluir'
    deletebutton.type = 'button'

    div.appendChild(newinput)
    div.appendChild(deletebutton)

    deletebutton.addEventListener('click', function(){
      div.remove()
    })

    fs.insertBefore(div, addbutton)
  })

}