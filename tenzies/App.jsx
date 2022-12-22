import React from "react";
import Die from "./Die";


// function allNewDice() {
//     // make a new empty array with a 
//     // length of 10 and then fill the 
//     // empty array
//     const array = Array(10).fill() 

//     // taking the array and getting 10
//     // random numbers with values 
//     // between 1 - 6 (inclusive(x & y))
//     // rounding the values down so we get 
//     // ints
//     .map(() =>  Math.floor(Math.random() * 6) + 1)
//     // console.log(array)
//     return array
// }

// console.log(allNewDice())

export default function App() {
    // setting state to hold
    // new dice array and initialize
    // it with allNewDice()
    const [dice, setDice] = React.useState(allNewDice())

    function allNewDice() {
        // make a new empty array with a 
        // length of 10 and then fill the 
        // empty array
        const array = Array(10).fill() 
    
        // taking the array and getting 10
        // random numbers with values 
        // between 1 - 6 (inclusive(x & y))
        // rounding the values down so we get 
        // ints
        .map(() =>  Math.ceil(Math.random() * 6))
        // console.log(array)
        return array
    }
    // generate new dice by
    // using setDice and 
    // calling allNewDice()
    // will determine what 
    // the new dice are
    function rollDice() {
        setDice(allNewDice())
    }
    // mapping over state numbers array to
    // generate an array of die elements 
    // to render / return 
    // (look at each die and return a Die
    // component )
    const diceElements = dice.map(die => <Die value={die} />)

    return (
        <main>
            <div className="dice-container">
               {diceElements}
            </div>
            <button onClick={rollDice} className="roll-btn" >Roll</button>
        </main>
    )
}