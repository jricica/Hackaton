interface Props {
  setPage: (p: string) => void
}

export default function NavBar({ setPage }: Props) {
  return (
    <nav>
      <button onClick={() => setPage('home')}>Inicio</button>
      <button onClick={() => setPage('writer')}>Escritor</button>
      <button onClick={() => setPage('quiz')}>Quiz</button>
      <button onClick={() => setPage('debate')}>Debate</button>
      <button onClick={() => setPage('board')}>Leaderboard</button>
    </nav>
  )
}
