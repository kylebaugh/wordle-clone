import {useState} from 'react'

const Guess = (props) => {

    const {guess, active, data, word} = props

    const letterColor = {
        0: '',
        1: '',
        2: '',
        3: '',
        4: ''
    }

    // console.log(word)
    // console.log(data)

    // for(let i = 0; i < data.length; i++){
    //     for(let k = i + 1; k < word.length; k++){
    //         if(word[i] === data[k]){
    //             letterColor[i] = 'green'
    //         }else if(word.includes(data[k])){
    //             letterColor[i] = 'yellow'
    //         }
    //     }
    // }

    for(let i = 0; i < data.length; i++){
        // console.log('index', word.includes(data[i]))
        // console.log('index 2', i === word.indexOf(data[i]))

        if(word.includes(data[i].toUpperCase()) && i === word.indexOf(data[i].toUpperCase())){
            letterColor[i] = 'green'
            console.log('hit')
        }else if(word.includes(data[i].toUpperCase()) && i !== word.indexOf(data[i].toUpperCase())){
            letterColor[i] = 'yellow'
        }
    }

    // console.log(letterColor)

    return active ? (
        <div className='guessRow'>
            <section>{'=>'}</section>
            <section className='rowLetter'>{guess[0]}</section>
            <section className='rowLetter'>{guess[1]}</section>
            <section className='rowLetter'>{guess[2]}</section>
            <section className='rowLetter'>{guess[3]}</section>
            <section className='rowLetter'>{guess[4]}</section>
            <section>{'<='}</section>
        </div>
    ) : (
        <div className='guessRow'>
            <section className={`rowLetter ${letterColor['0']}`}>{data[0]}</section>
            <section className={`rowLetter ${letterColor['1']}`}>{data[1]}</section>
            <section className={`rowLetter ${letterColor['2']}`}>{data[2]}</section>
            <section className={`rowLetter ${letterColor['3']}`}>{data[3]}</section>
            <section className={`rowLetter ${letterColor['4']}`}>{data[4]}</section>
        </div>
    )
}

export default Guess