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

const getRandomNumber = (min = 1, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const greatestCommonDivisor = () => {
  let number1 = getRandomNumber();
  let number2 = getRandomNumber();

  const question = `${number1} ${number2}`

  let correctAnswer = euclideanAlgorithm(number1, number2)
  return [question, correctAnswer]
}

export default () => runGame(description, greatestCommonDivisor)
