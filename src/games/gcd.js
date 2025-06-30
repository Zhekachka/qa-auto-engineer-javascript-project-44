import runGame from '../index.js'

const description = 'Find the greatest common divisor of given numbers.'

const euclideanAlgorithm = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

const greatestCommonDivisor = () => {
  let number1 = Math.floor(Math.random() * 100) + 1
  let number2 = Math.floor(Math.random() * 100) + 1

  const question = `${number1} ${number2}`

  let correctAnswer = euclideanAlgorithm(number1, number2)
  return [question, correctAnswer]
}

export default () => runGame(description, greatestCommonDivisor)
