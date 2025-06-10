import { useState } from 'react'

interface Question {
  question: string
  options: string[]
  answer: number
}

const questions: Question[] = [
  {
    question: '¿Quién escribió "El camino de servidumbre"?',
    options: ['Friedrich Hayek', 'Adam Smith', 'Milton Friedman'],
    answer: 0,
  },
  {
    question: 'La teoría de la mano invisible pertenece a',
    options: ['James Buchanan', 'Adam Smith', 'John Locke'],
    answer: 1,
  },
]

export default function Quiz() {
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  function handleAnswer(i: number) {
    if (i === questions[current].answer) {
      setScore((s) => s + 1)
    }
    const next = current + 1
    if (next < questions.length) {
      setCurrent(next)
    } else {
      setFinished(true)
    }
  }

  if (finished) {
    return (
      <section>
        <h2>Resultado del Quiz</h2>
        <p>
          Tu puntaje: {score} de {questions.length}
        </p>
      </section>
    )
  }

  const q = questions[current]

  return (
    <section>
      <h2>Quiz</h2>
      <p>{q.question}</p>
      {q.options.map((opt, i) => (
        <button key={opt} onClick={() => handleAnswer(i)}>
          {opt}
        </button>
      ))}
    </section>
  )
}
