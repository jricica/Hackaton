interface Entry {
  group: string
  score: number
}

const sample: Entry[] = [
  { group: 'Equipo A', score: 80 },
  { group: 'Equipo B', score: 70 },
  { group: 'Equipo C', score: 65 },
]

export default function Leaderboard() {
  const ordered = [...sample].sort((a, b) => b.score - a.score)

  return (
    <section>
      <h2>Leaderboard</h2>
      <ol>
        {ordered.map((e) => (
          <li key={e.group}>
            {e.group}: {e.score} pts
          </li>
        ))}
      </ol>
    </section>
  )
}
