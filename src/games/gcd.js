import runGame from '../index.js'
import { getRandomNumber } from '../utils.js'

const description = 'Find the greatest common divisor of given numbers.'

const calculateGcd = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

const generateGcdRound = () => {
  const number1 = getRandomNumber()
  const number2 = getRandomNumber()

  const question = `${number1} ${number2}`

  const correctAnswer = calculateGcd(number1, number2)
  return [question, correctAnswer]
}

export default () => runGame(description, generateGcdRound)
