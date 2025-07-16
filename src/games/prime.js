import runGame from '../index.js'
import { getRandomNumber } from '../utils.js'

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
  const maxDivisor = Math.sqrt(number)
  for (let i = 5; i <= maxDivisor; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false
    }
  }
  return true
}

const generatePrimeRound = () => {
  const number = getRandomNumber()
  const correctAnswer = isPrime(number) ? 'yes' : 'no'
  return [number.toString(), correctAnswer.toString()]
}

const runPrime = () => runGame(description, generatePrimeRound)

export default runPrime
