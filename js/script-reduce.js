// Retorna a soma de todos os itens do array.
const numbers = [1, 2, 3];

const sumResult = numbers.reduce((accumulator, item) => accumulator + item, 0);

console.log(sumResult);


//Retorna o total do score do jogador Roger Melo
const phaseScores = [
  { name: 'Vinicius Costa', score: 337 },
  { name: 'Roger Melo', score: 43 },
  { name: 'Alfredo Braga', score: 234 },
  { name: 'Pedro H. Silva', score: 261 },
  { name: 'Ana Paula Rocha', score: 491 },
  { name: 'Vinicius Costa', score: 167 },
  { name: 'Roger Melo', score: 137 },
  { name: 'Alfredo Braga', score: 135 },
  { name: 'Ana Paula Rocha', score: 359 },
  { name: 'Pedro H. Silva', score: 133 }
]

const rogerScore = phaseScores.reduce((acc, phaseScore) => {
  if(phaseScore.name === 'Roger Melo') {
    return acc + phaseScore.score
  }
  return acc
}, 0)

console.log('O score de Roger Melo é: '+rogerScore);