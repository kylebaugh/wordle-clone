import { useState, useEffect } from 'react'
import './css/App.css'
import Header from './components/Header.jsx'
import GuessDisplay from './components/GuessDisplay.jsx'
import Keyboard from './components/Keyboard.jsx'
import lodash from 'lodash'

let wordArr = [
  'Abyss',
  'Ample',
  'Ankle',
  'Aroma',
  'Aural',
  'Began',
  'Blunt',
  'Braid',
  'Brisk',
  'Bumpy',,
  'Chive',
  'Clasp',
  'Crave',
  'Crest',
  'Cumin',
  'Drape'
]

function App() {

  const [guessCount, setGuessCount] = useState(0)
  const [word, setWord] = useState('')
  const [guess, setGuess] = useState([])
  const [guessArr, setGuessArr] = useState(['', '', '', '', '', ''])


  console.log('guess', guess)

  useEffect(() => {
    setWord(lodash.sample(wordArr).toUpperCase())
  }, [])

  return (
    <>
      <Header />

      <GuessDisplay
        word={word}
        guess={guess}
        guessCount={guessCount}
        guessArr={guessArr}
      />

      <Keyboard
        setGuess={setGuess}
        guess={guess}
        setGuessCount={setGuessCount}
        guessCount={guessCount}
        setGuessArr={setGuessArr}
        guessArr={guessArr}
      />
    </>
  )
}

export default App
