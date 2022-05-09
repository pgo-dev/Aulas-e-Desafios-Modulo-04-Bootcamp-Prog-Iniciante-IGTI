let primos=[2,3,5,7,11,13]

let curso = {
  nome: "Bootcamp Programador Iniciante",
  modulos: 4,
  presencial: false,
  turma: 1
}

let primos2 = [...primos, 17]
let primos3 = [1, ...primos, 17]

let curso2 = {
  ...curso,
  descrição: 'Apredizado de front-end',
  ativo: true,
}

let curso3 = {
  ...curso
}
