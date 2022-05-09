function fetchJson(url, options){
  return fetch(url, options).then((r) => {
    if (r.ok){
      return r.json()
    }else{
      throw new Error(r.statusText)
    }
  }).catch(error => {
    showError('Loading data error', error)
    throw error
  })
}

const baseUrl = "http://localhost:3000";


function listEmployees(){
  return fetchJson(`${baseUrl}/employees`)
}

function listRoles(){
  return fetchJson(`${baseUrl}/roles`)
}