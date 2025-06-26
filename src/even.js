import readlineSync from 'readline-sync'

const isEven = (num) => {
  return num % 2 === 0
}

const isEvenNumder = () => {
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  let rounds = 3

  for (let i = 0; i < rounds; i++) {
    const number = Math.floor(Math.random() * 100)
    const correctAnswer = isEven(number) ? 'yes' : 'no'
    const userAnswer = readlineSync.question(`Question: ${number}\nYour answer: `)

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }

    console.log('Correct!')
  }

  console.log(`Congratulations, ${name}!`)
}
export default isEvenNumder
