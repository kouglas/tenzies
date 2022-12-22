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
        .map(() =>  Math.floor(Math.random() * 6) + 1)
        // console.log(array)
        return array
    }

    const diceElements = dice.map(die => <Die value={die} />)

    return (
        <main>
            <div className="dice-container">
               {diceElements}
            </div>
        </main>
    )
}