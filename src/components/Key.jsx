import React from 'react'

const Key = (props) => {
    const {letter, guess, setGuess, setGuesses, guesses} = props

    const handleClick = () => {
        if(letter === 'Del'){
            let guessCopy = [...guess]
            guessCopy.pop()
            setGuess(guessCopy)
        }else if(guess.length < 5){
            let guessCopy = [...guess]
            guessCopy.push(letter.toUpperCase())
            setGuess(guessCopy)
        }else if(letter === 'Go'){
            setGuesses(guesses + 1)
            setGuess([])
        }
    }

    return (
        <p className='letter' onClick={handleClick}>{letter}</p>
    )
}

export default Key