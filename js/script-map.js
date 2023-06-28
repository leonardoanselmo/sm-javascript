// Array de numero para retornar um novo array com o seu dobro
const numbers = [1, 2, 3];

const doubledNumbers = numbers.map(item => {
  return item * 2;
})

console.log(doubledNumbers);

// Array de preços para retornar um novo array com a metade do preço
const precos = [10, 50, 25, 30, 45, 80, 15, 5, 10]

const precosPromocao = precos.map(item => item / 2)

console.log(precosPromocao);

// Array de produtos para retornar um novo array com os produtos, mas os produtos que tenham preço acima ou igual a R$ 30,00 serem divididos por 2.
const  produtos  =  [
  {  nome : 'Mouse Sem Fio' ,  preço : 30  } ,
  {  nome : 'Pen Drive' ,  preço : 25  } ,
  {  nome : 'Cartucho de Tinta' ,  preço : 50  } ,
  {  nome : 'Suporte Ergonômico para Notebook' ,  preço : 23  } ,
  {  nome : 'Repetidor de Sinal Wi-Fi' ,  preço : 44  }
]

const produtosPromocao = produtos.map(item => {
  if(item.preço >= 30){
    return {
      nome: item.nome,
      preço: item.preço / 2
    }
  }
  return item
})

console.log(produtosPromocao);