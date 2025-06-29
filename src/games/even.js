import runGame from '../index.js'

const getRandomNumber = (min = 1, max = 100) =>
  Math.floor(Math.random() * (max - min + 1)) + min

const description = 'Answer "yes" if the number is even, otherwise answer "no".'
const isEven = (num) => {
  return num % 2 === 0
}

const isEvenNumber = () => {
  const number = getRandomNumber(1, 100)
  const correctAnswer = isEven(number) ? 'yes' : 'no'
  return [number, correctAnswer]
}

export default () => runGame(description, isEvenNumber)
