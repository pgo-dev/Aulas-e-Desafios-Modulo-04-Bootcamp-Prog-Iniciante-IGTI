let employees = []
let roles = []
const sort = document.getElementById('sort')
const listEl = document.querySelector('ul')
const tableEL = document.querySelector('tbody')
const filter = document.getElementsByClassName('role')
const nemp = document.getElementById('nemp')
let rolesOn = []
let empOn = []
let vector =[]

loadData()

sort.addEventListener('change', sortBy)

function filterVec(){
  let j = 0
  for (let i of filter){
    if (i.checked){
       rolesOn[j] = i.id
       j++
    }
  }
  for (let k of rolesOn){
    let array = employees.filter((item) => item.role_id == k)
    empOn = empOn.concat(array)
  }
  tableEL.innerHTML=''
  renderData(empOn)
  sort.value=''
  rolesOn = []
  empOn = []
}

function sortBy(){
  let value = sort.value
  sortVec(value, vector)
  tableEL.innerHTML=''
  renderData(vector)
}

function sortVec(v, vet){
  if(!vet[0]){
    vet = employees
  }
  switch (v){
    case 'ndes':
      vet.sort((a, b) => (a.name<b.name) ? 1 : ((a.name>b.name) ? -1 : 0))
      break
    case 'sas':
      vet.sort((a, b) => a.salary - b.salary)
      break
    case 'sdes':
      vet.sort((a, b) => b.salary - a.salary)
      break
    default:
      vet.sort((a, b) => (a.name<b.name) ? -1 : ((a.name>b.name) ? 1 : 0))
  }
}

function renderData(vet){
  if(!vet[0]){
    vet = employees
  }  
  for(const employee of vet){
    
    let role = roles.find((role) => role.id == employee.role_id);

    const tr = document.createElement('tr')
    const idtd = document.createElement('td')
    const nametd = document.createElement('td')
    const roletd = document.createElement('td')
    const salarytd = document.createElement('td')

    idtd.textContent = employee.id
    nametd.textContent = employee.name
    roletd.textContent = role.name
    salarytd.textContent = employee.salary

    tr.appendChild(idtd)
    tr.appendChild(nametd)
    tr.appendChild(roletd)
    tr.appendChild(salarytd)
    tableEL.appendChild(tr)
  }
  nemp.innerText = vet.length
  vector = vet
}

async function loadData(){
  [employees, roles] = await Promise.all([
    listEmployees(), 
    listRoles()])

  //sortVec('', employees)
  renderRoles()
  renderData(employees)
}

function renderRoles(){
  let i=0
  for (const role of roles){
    const li = document.createElement('li')
    const label = document.createElement('label')
    label.textContent = role.name

    const input = document.createElement('input')
    input.addEventListener('click', filterVec)
    input.type = 'checkbox'
    input.id = i+1
    i++
    input.className = 'role'

    li.appendChild(input)
    li.appendChild(label)
    
    listEl.appendChild(li)
  }
}


