function soma1(a,b){
  return a+b
}

var soma2 = (a,b) => a+b

function retangulo(a,l) {
  this.a = a
  this.l = l
  this.area = () => this.a*this.l
}
retangulo.prototype.area = () => this.a*this.l

var imprimeMensagem = () => console.log('teste')

