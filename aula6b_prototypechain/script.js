function retangulo(altura, largura){
  this.altura = altura
  this.largura = largura
  this.area = function(){
    return this.altura*this.largura
  }
}

var r1 = new retangulo(3, 4)
var r2 = new retangulo(7, 2)

function retangulov2(altura, largura){
  this.altura = altura
  this.largura = largura
}

retangulov2.prototype.area= function(){
  return this.altura * this.largura
}

var r3 = new retangulov2(3, 4)
var r4 = new retangulov2(7, 2)