import readlineSync from 'readline-sync'

const calculate = () => {
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)

  const operations = ['+', '-', '*']

  let rounds = 3

  for (let i = 0; i < rounds; i++) {
    const operation = operations[Math.floor(Math.random() * operations.length)]
    let number1 = Math.floor(Math.random() * 100)
    let number2 = Math.floor(Math.random() * 100)
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
    console.log(`Question: ${number1} ${operation} ${number2}`)

    const userAnswer = readlineSync.question(`Your answer: `)

    if (Number(userAnswer) !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }

    console.log('Correct!')
  }

  console.log(`Congratulations, ${name}!`)
}
export default calculate
