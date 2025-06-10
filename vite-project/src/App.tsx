import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Writer from './components/Writer'
import Quiz from './components/Quiz'
import Debate from './components/Debate'
import Leaderboard from './components/Leaderboard'
import NavBar from './components/NavBar'

export default function App() {
  const [page, setPage] = useState('home')

  let content
  switch (page) {
    case 'writer':
      content = <Writer />
      break
    case 'quiz':
      content = <Quiz />
      break
    case 'debate':
      content = <Debate />
      break
    case 'board':
      content = <Leaderboard />
      break
    default:
      content = <Home />
  }

  return (
    <>
      <NavBar setPage={setPage} />
      {content}
    </>
  )
}
