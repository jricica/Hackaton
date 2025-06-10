import { useState } from 'react'

export default function Debate() {
  const [scores, setScores] = useState<[number, number]>([0, 0])

  function simulate() {
    const a = Math.floor(Math.random() * 100)
    const b = Math.floor(Math.random() * 100)
    setScores([a, b])
  }

  return (
    <section>
      <h2>Debate Interescolar</h2>
      <p>Simulación de puntuación AI</p>
      <button onClick={simulate}>Calcular puntajes</button>
      <ul>
        <li>Equipo A: {scores[0]} puntos</li>
        <li>Equipo B: {scores[1]} puntos</li>
      </ul>
    </section>
  )
}
