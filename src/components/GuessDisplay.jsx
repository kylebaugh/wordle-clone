import {useState} from 'react'
import Guess from './Guess.jsx'
import '../css/GuessDisplay.css'

const GuessDisplay = (props) => {
    const {word, guess, guesses} = props

    console.log(word)

    const guessMap = []

    for(let i = 0; i < 6; i++){
        if(i === guesses){
            guessMap.push(<Guess guess={guess} active={true}/>)
        }else{
            guessMap.push(<Guess guess={guess} active={false}/>)
        }
    }

    return (
        <div>
            {guessMap}

        </div>
    )
}

export default GuessDisplay