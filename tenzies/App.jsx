import React from "react";
import Die from "./Die";
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'


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

    const [tenzies, setTenzies] = React.useState(false)

    React.useEffect(() => {
       const allHeld = dice.every(die => die.isHeld)
       const firstValue = dice[0].value
       const allSameValue = dice.every(die => die.value === firstValue)
       if (allHeld && allSameValue) {
        setTenzies(true)
        console.log("you won")
       }

        console.log("dice state changed")
    }, [dice])

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6), 
            isHeld: false,
            id: nanoid(),

        }
    }

    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())
        }
        console.log(newDice)
        return newDice
    }
    
    function rollDice() {
        if(!tenzies) {
        setDice(oldDice => oldDice.map(die => {
            return die.isHeld ?
            die:
            generateNewDie()
        }))
        // restart the game
    } else {
        setTenzies(false)
        setDice(allNewDice())

    }
    }
    // flipping  the isHeld property
    // on the array that was clicked
    // based on the 'id' prop passed 
    // into the function 
    function holdDice(id){
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ?
            {...die, isHeld: !die.isHeld} : 
            die
        }))
        console.log(id)
    }
    
    const diceElements = dice.map(die => (
         <Die 
          value={die.value}
          key={die.id} 
          isHeld={die.isHeld}
          holdDice={() => holdDice(die.id)}

          />
          
          ))

    return (
        <main>
            {tenzies && <Confetti /> }
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. 
            Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
               {diceElements}
            </div>
            <button 
              onClick={rollDice}
            className="roll-btn">
                {/* if tenzies is true show "new game"
                otherwise continue showing "roll" */}
                {tenzies ? "New Game" : "Roll"}
                </button>
        </main>
    )
}