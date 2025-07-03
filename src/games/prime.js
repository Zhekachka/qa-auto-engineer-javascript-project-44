import runGame from '../index.js'

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrime = (number) => {
  if (number <= 1) {
    return false
  }
  if (number <= 3) {
    return true
  }
  if (number % 2 === 0 || number % 3 === 0) {
    return false
  }
  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false
    }
  }
  return true
}

const generateRound = () => {
  const number = Math.floor(Math.random() * 100) + 1
  const correctAnswer = isPrime(number) ? 'yes' : 'no'
  return [number, correctAnswer]
}

export default () => runGame(description, generateRound)
