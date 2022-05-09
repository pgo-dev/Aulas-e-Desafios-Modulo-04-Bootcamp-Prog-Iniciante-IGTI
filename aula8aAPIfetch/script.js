function solution1() {
  let employeesPromise = fetch("http://localhost:3000/employees");

  employeesPromise.then((resp) => {
    resp.json().then((employees) => {
      let rolesPromise = fetch("http://localhost:3000/roles");
      rolesPromise.then((resp2) => {
        resp2.json().then((roles) => {
          let table = renderTable(employees, roles);
          document.getElementById("app").innerHTML = table;
        });
      });
    });
  });
}

function solution2() {
  fetchJson("http://localhost:3000/employees").then((employees) => {
    fetchJson("http://localhost:3000/roles").then((roles) => {
      let table = renderTable(employees, roles)
      document.getElementById("app").innerHTML = table
    })
    .catch(showError())
  })
  .catch(showError())
}


function fetchJson(url) {
  return fetch(url).then((r) => {
    if (r.ok){
    return r.json()
    }else{
      throw new Error(r.statusText)
    }
  })
}

function solution3() {
  Promise.all([
    fetchJson("http://localhost:3000/employees"),
    fetchJson("http://localhost:3000/roles"),
  ])
  .then(([employees, roles]) => {
    let table = renderTable(employees, roles)
    document.getElementById("app").innerHTML = table
  })
  .catch(showError())
  .finally(()=>{
    console.log('Carregou')
  })
}


async function solution4() {
  try{
    let employees = await fetchJson("http://localhost:3000/employees")
    let roles = await fetchJson("http://localhost:3000/roles")

    let table = renderTable(employees, roles);
    document.getElementById("app").innerHTML = table;
  }catch(error){
    showError(error)
  } 
}

async function solution5() { // AWAIT somente funciona dentro de uma ASYNC FUNCTION
    try{
      let [employees, roles] = await Promise.all([fetchJson("http://localhost:3000/employees"), fetchJson("http://localhost:3000/roles")])

      let table = renderTable(employees, roles);
      document.getElementById("app").innerHTML = table;
    }catch(error){
      showError(error)
    } finally{
      console.log("Carregou")
    }
}

function renderTable(employees, roles) {
  let rows = employees.map((employee) => {
  let role = roles.find((role) => role.id == employee.role_id);
  return `<tr><td>${employee.id}</td><td>${employee.name}</td><td>${role.name}</td></tr>`;
  });
  return `<table>${rows.join("")}</table>`;
}

function showError(error){
  document.getElementById("app").innerHTML = 'Erro ao carregar dados';
  console.error(error)
}

//solution1()
//solution2()
//solution3()
//solution4()
solution5()
