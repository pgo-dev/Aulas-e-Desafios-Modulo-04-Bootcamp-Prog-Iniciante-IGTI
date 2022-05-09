let nome = document.getElementById('nome')
let salario = document.getElementById('salario')
let buttoncad = document.getElementById('cad')
let inputs = document.querySelector('ul')
let span = document.createElement('span')
let table = document.querySelector('table')
let msg = document.getElementById('msg')
let func = document.getElementById('func')
let buttoncheq = document.getElementById('cheq')
let q = 1
let row = []

buttoncad.addEventListener('click', cadastraFunc)
buttoncheq.addEventListener('click', calcContra)

function calcContra(){
  row = document.getElementsByClassName('linhas')
  if (q==1){
    res.innerText=''
    res.innerText='Preencha a tabela antes'
    res.style.color = 'red'
  }else if(func.value==''){
    res.innerText=''
    res.innerText='Digite um valor'
    res.style.color = 'red'
  }else if(func.value<=row.length){
    res.innerText=''
    for(let i = 0; i<row.length; i++){
      if (row[i].children[0].innerText == func.value){
        let sal = row[i].children[2].innerText
        let name = row[i].children[1].innerText
        let salBruto = calcSal(sal)
        res.innerText=''
        res.innerHTML=`Para ${name}:<br>O desconto do Inss é R$${calcInss(sal).toFixed(2)};<br>O desconto do Irrf é R$${calcIrrf(sal).toFixed(2)};<br> E seu salário líquido é R$${salBruto.toFixed(2)}.`
        res.style.color = 'black'
      }
    }
  }else{
    res.innerText=''
    res.innerText='Digite uma opção válida'
    res.style.color = 'red'
  }
}

function calcSal(sal){ 
  let inss = calcInss(sal)
  let irrf = calcIrrf(sal)
  return sal - inss - irrf
}

function calcIrrf(sal){
  if ((sal - calcInss(sal)) <= 1903.98)
  {return 0}
 if ((sal - calcInss(sal)) <= 2826.65)
  {return (sal - calcInss(sal))*0.075-142.8}
 if ((sal - calcInss(sal)) <= 3751.05)
  {return (sal - calcInss(sal))*0.15-354.8}
 if ((sal - calcInss(sal)) <= 4664.68)
  {return (sal - calcInss(sal))*0.225-636.13}
else
  {return (sal - calcInss(sal))*0.275-869.36}
}

function calcInss(sal){
  let a1 = 82.5
  let a2 = 99.31
  let a3 = 132.21
  let a4 = 437.97

  if (sal <= 1100)
  {return sal*0.075}
  if (sal <= 2203.48)
      {return a1 + (sal-1100.01)*0.09}
  if (sal <= 3305.22)
      {return a1 + a2 + (sal-2203.49)*0.12}
  if (sal <= 6433.57)
      {return a1 + a2 + a3 + (sal-3305.23)*0.14}
  else
      {return a1+a2+a3+a4}
}

function cadastraFunc(){
  span.innerText=''
  if(!nome.value || !salario.value){
    mensagem()
  }else if(q==1){
    criarThead()
    criarTbody()
  }else{
    criarTbody()
  }
}

function mensagem(){
  span.innerText = 'Preencha todos os campos!'
  span.style.color = 'red'
  inputs.append(span)
}

function criarThead(){
    table.innerHTML=''
    msg.innerText=''
    let trth = document.createElement('tr')
    let idth = document.createElement('th')
    idth.innerText = 'ID'
    let nometh = document.createElement('th')
    nometh.innerText = 'Nome'
    let salth = document.createElement('th')
    salth.innerText = 'Salário'

    table.append(trth)
    trth.append(idth)
    trth.append(nometh)
    trth.append(salth)
}

function criarTbody(){
  let trtd = document.createElement('tr')
  trtd.className = 'linhas'
  let idtd = document.createElement('td')
  idtd.innerText = q
  let nometd = document.createElement('td')
  nometd.innerText = nome.value
  let saltd = document.createElement('td')
  saltd.innerText = salario.value

  table.append(trtd)
  trtd.append(idtd)
  trtd.append(nometd)
  trtd.append(saltd)
  q++
}