import runGame from '../index.js'
import { getRandomNumber } from '../utils.js'

const description = 'What is the result of the expression?'
const operations = ['+', '-', '*']

const calculate = (number1, number2, operation) => {
  switch (operation) {
    case '+':
      return number1 + number2
    case '-':
      return number1 - number2
    case '*':
      return number1 * number2
    default:
      throw new Error(`Unknown operation: ${operation}`)
  }
}

const generateCalculationRound = () => {
  const number1 = getRandomNumber()
  const number2 = getRandomNumber()
  const operation = operations[getRandomNumber(0, operations.length - 1)]

  const question = `${number1} ${operation} ${number2}`
  const correctAnswer = calculate(number1, number2, operation)

  return [question, correctAnswer.toString()]
}

const runCalc = () => runGame(description, generateCalculationRound)

export default runCalc
