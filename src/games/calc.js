import runGame from '../index.js'

const description = 'What is the result of the expression?'

const calculate = () => {
  const operations = ['+', '-', '*']

  let number1 = Math.floor(Math.random() * 100)
  let number2 = Math.floor(Math.random() * 100)
  const operation = operations[Math.floor(Math.random() * operations.length)]

  const question = `${number1} ${operation} ${number2}`

  let correctAnswer

  switch (operation) {
    case '+':
      correctAnswer = number1 + number2
      break
    case '-':
      correctAnswer = number1 - number2
      break
    case '*':
      correctAnswer = number1 * number2
      break
  }
  return [question, String(correctAnswer)]
}
export default () => runGame(description, calculate)
