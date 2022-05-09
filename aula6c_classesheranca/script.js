class retangulo{
  constructor(a, l){
    this.a = a
    this.l = l
    this.nome = 'Retângulo'
  }

  area(){
    return this.a*this.l
  }
  imprimeNome(){
    console.log(this.nome)
  }
}

class quadrado extends retangulo{
  constructor(d){
    super(d, d)
    this.nome = 'Quadrado'
  }
}


var r1 = new retangulo(3, 4)
var r2 = new retangulo(3, 8)
var r3 = new quadrado(3)