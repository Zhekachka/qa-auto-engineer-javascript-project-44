import generateRound from '../index.js'
import { getRandomNumber } from '../utils.js'

const description = 'Find the greatest common divisor of given numbers.'

const calculateGcd = (a, b) => (
  b === 0 ? a : calculateGcd(b, a % b)
)

const generateGcdRound = () => {
  const number1 = getRandomNumber()
  const number2 = getRandomNumber()

  const question = `${number1} ${number2}`

  const correctAnswer = calculateGcd(number1, number2)
  return [question, correctAnswer.toString()]
}

const runGcd = () => generateRound(description, generateGcdRound)

export default runGcd
