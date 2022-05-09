let a =1;
const b =1;

a = 2

function teste(){
  for (var i = 1; i<5; i++){
  }
  for (let j = 1; j<5; j++){
  }
  console.log(`Valor final de i: ${i}`)
  console.log(`Valor final de j: ${j}`)
}

teste()
console.log(`Valor de j: ${j}`)