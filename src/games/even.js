import runGame from '../index.js'
import { getRandomNumber } from '../utils.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = (number) => {
  return number % 2 === 0
}

const generateEvenRound = () => {
  const number = getRandomNumber()
  const correctAnswer = isEven(number) ? 'yes' : 'no'
  return [number.toString(), correctAnswer.toString()]
}

const runEven = () => runGame(description, generateEvenRound)

export default runEven
