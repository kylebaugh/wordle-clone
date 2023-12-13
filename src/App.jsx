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

  const [guesses, setGuesses] = useState(0)
  const [word, setWord] = useState('')
  const [guess, setGuess] = useState([])
  // const [first, setFirst] = useState('')
  // const [second, setSecond] = useState('')
  // const [third, setThird] = useState('')
  // const [fourth, setFourth] = useState('')
  // const [fifth, setFifth] = useState('')

  console.log('guess', guess)

  useEffect(() => {
    setWord(lodash.sample(wordArr))
  }, [])

  return (
    <>
      <Header />

      <GuessDisplay
        word={word}
        guess={guess}
        guesses={guesses}
        // first={first}
        // second={second}
        // third={third}
        // fourth={fourth}
        // fifth={fifth}
      />

      <Keyboard
        setGuess={setGuess}
        guess={guess}
        setGuesses={setGuesses}
        guesses={guesses}
        // setFirst={setFirst}
        // setSecond={setSecond}
        // setThird={setThird}
        // setFourth={setFourth}
        // setFifth={setFifth}
      />
    </>
  )
}

export default App
