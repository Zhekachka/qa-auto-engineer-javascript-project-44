import runGame from '../index.js'

const description = 'What number is missing in the progression?'

const arithmeticProgression = (length) => {
  const progression = []
  const start = Math.floor(Math.random() * 10)
  const step = Math.floor(Math.random() * 10) + 1
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step)
  }
  return progression
}

const findMissingNumber = () => {
  const length = Math.floor(Math.random() * 6) + 5
  const progression = arithmeticProgression(length)
  const hiddenElementIndex = Math.floor(Math.random() * length)
  const correctAnswer = progression[hiddenElementIndex]
  progression[hiddenElementIndex] = '..'
  const question = progression.join(' ')
  return [question, correctAnswer]
}

export default () => runGame(description, findMissingNumber)
