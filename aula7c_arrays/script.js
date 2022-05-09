//1. for ... of ... :

for (let item of usPresidents){
 //console.log(item.president)
}

//2. forEach:

usPresidents.forEach((item, index) =>{
  console.log(`O ${index+1}º presidente dos Estados Unidos foi: ${item.president}`)
})

//3. map:

let names = usPresidents.map((item) => item.president)

//4. filter:
let republicans = usPresidents.filter((item) => item.party == 'Democratic-Republican').map((item) => item.president)

//5. find:

let p1 = usPresidents.find((item) => item.party =='Federalist')

//6. sort:
usPresidents.sort((i1, i2)=>{
  if (i1.president<i2.president){
    return -1
  }else if(i1.president>i2.president){
    return 1
  }else{
    return 
  }
})

