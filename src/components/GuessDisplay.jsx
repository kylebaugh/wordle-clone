import {useState} from 'react'
import Guess from './Guess.jsx'
import '../css/GuessDisplay.css'

const GuessDisplay = (props) => {
    const {word, guess, guessCount, guessArr} = props

    console.log(word)

    const guessMap = []

    for(let i = 0; i < 6; i++){
        if(i === guessCount){
            guessMap.push(<Guess guess={guess} active={true} data={guessArr[i]} word={word}/>)
        }else{
            guessMap.push(<Guess guess={guess} active={false} data={guessArr[i]} word={word}/>)
        }
    }

    return (
        <div>
            {guessMap}
        </div>
    )
}

export default GuessDisplay