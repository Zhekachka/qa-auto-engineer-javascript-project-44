import runGame from '../index.js'
import { getRandomNumber } from '../utils.js'

const description = 'What number is missing in the progression?'
const length = 10

const generateArithmeticProgression = () => {
  const progression = []
  const start = getRandomNumber()
  const step = getRandomNumber()
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step)
  }
  return progression
}

const generateProgressionRound = () => {
  const progression = generateArithmeticProgression()
  const hiddenElementIndex = getRandomNumber(0, length - 1)
  const correctAnswer = progression[hiddenElementIndex]
  progression[hiddenElementIndex] = '..'
  const question = progression.join(' ')
  return [question, correctAnswer]
}

export default () => runGame(description, generateProgressionRound)
