import React from 'react'

const Key = (props) => {
    const {letter, guess, setGuess, setGuessCount, setGuessArr, guessArr, guessCount} = props

    const handleClick = () => {
        if(letter === 'Del'){
            let guessCopy = [...guess]
            guessCopy.pop()
            setGuess(guessCopy)
        }else if(letter === 'Go' && guess.length === 5){
            setGuessCount(guessCount + 1)
            setGuess([])
            let tempArr = [...guessArr]
            tempArr[guessCount] = guess.join('')
            setGuessArr(tempArr)
        }else if(guess.length < 5 && letter !== 'Go'){
            let guessCopy = [...guess]
            guessCopy.push(letter.toUpperCase())
            setGuess(guessCopy)
        }
    }

    return (
        <p className='letter' onClick={handleClick}>{letter}</p>
    )
}

export default Key