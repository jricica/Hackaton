import { useState } from 'react'
import writers from '../writers'

export default function Writer() {
  const [index, setIndex] = useState(0)
  const writer = writers[index]

  return (
    <section>
      <h2>Escritor de la semana</h2>
      <h3>{writer.name}</h3>
      <p>{writer.bio}</p>
      <button onClick={() => setIndex((index + 1) % writers.length)}>
        Siguiente escritor
      </button>
    </section>
  )
}
