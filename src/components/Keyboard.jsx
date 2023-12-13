import React from 'react'
import Key from './Key.jsx'
import '../css/Keyboard.css'

const Keyboard = (props) => {

    const {guess, setGuess, setGuesses, guesses, setFirst, setSecond, setThird, setFourth, setFifth} = props

    return (
        <div>
            <section id='topRow'>
                <Key letter={'Q'} guess={guess} setGuess={setGuess}/>
                <Key letter={'W'} guess={guess} setGuess={setGuess}/>
                <Key letter={'E'} guess={guess} setGuess={setGuess}/>
                <Key letter={'R'} guess={guess} setGuess={setGuess}/>
                <Key letter={'T'} guess={guess} setGuess={setGuess}/>
                <Key letter={'Y'} guess={guess} setGuess={setGuess}/>
                <Key letter={'U'} guess={guess} setGuess={setGuess}/>
                <Key letter={'I'} guess={guess} setGuess={setGuess}/>
                <Key letter={'O'} guess={guess} setGuess={setGuess}/>
                <Key letter={'P'} guess={guess} setGuess={setGuess}/>
            </section>


            <section id='middleRow'>
                <Key letter={'A'} guess={guess} setGuess={setGuess}/>
                <Key letter={'S'} guess={guess} setGuess={setGuess}/>
                <Key letter={'D'} guess={guess} setGuess={setGuess}/>
                <Key letter={'F'} guess={guess} setGuess={setGuess}/>
                <Key letter={'G'} guess={guess} setGuess={setGuess}/>
                <Key letter={'H'} guess={guess} setGuess={setGuess}/>
                <Key letter={'J'} guess={guess} setGuess={setGuess}/>
                <Key letter={'K'} guess={guess} setGuess={setGuess}/>
                <Key letter={'L'} guess={guess} setGuess={setGuess}/>
            </section>


            <section id='bottomRow'>
                <Key letter={'Go'} guesses={guesses} guess={guess} setGuess={setGuess} setGuesses={setGuesses} />
                <Key letter={'Z'} guess={guess} setGuess={setGuess}/>
                <Key letter={'X'} guess={guess} setGuess={setGuess}/>
                <Key letter={'C'} guess={guess} setGuess={setGuess}/>
                <Key letter={'V'} guess={guess} setGuess={setGuess}/>
                <Key letter={'B'} guess={guess} setGuess={setGuess}/>
                <Key letter={'N'} guess={guess} setGuess={setGuess}/>
                <Key letter={'M'} guess={guess} setGuess={setGuess}/>
                <Key letter={'Del'} guess={guess} setGuess={setGuess}/>
            </section>

        </div>
    )
}

export default Keyboard