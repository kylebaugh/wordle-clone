import {useState} from 'react'

const Guess = (props) => {

    const {guess, active, first, second, third, fourth, fifth} = props

    return active ? (
        <div className='guessRow'>
            <section className='rowLetter'>{guess[0]}</section>
            <section className='rowLetter'>{guess[1]}</section>
            <section className='rowLetter'>{guess[2]}</section>
            <section className='rowLetter'>{guess[3]}</section>
            <section className='rowLetter'>{guess[4]}</section>

        </div>
    ) : (
        <div className='guessRow'>
        <section className='rowLetter'></section>
        <section className='rowLetter'></section>
        <section className='rowLetter'></section>
        <section className='rowLetter'></section>
        <section className='rowLetter'></section>

    </div>
    )
}

export default Guess