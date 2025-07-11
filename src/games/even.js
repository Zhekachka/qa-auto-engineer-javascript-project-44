import runGame from '../index.js'
import { getRandomNumber } from '../utils.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'
const isEven = (num) => {
  return num % 2 === 0
}

const generateEvenRound = () => {
  const number = getRandomNumber()
  const correctAnswer = isEven(number) ? 'yes' : 'no'
  return [number, correctAnswer]
}

export default () => runGame(description, generateEvenRound)
