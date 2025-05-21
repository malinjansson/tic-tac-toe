import { useState } from "react"
import { GameBoard } from "./GameBoard";

export const TicTacToe = () => {

    const [value, setValue] = useState(Array(9).fill(null));
    const[currentPlayer, setCurrentPlayer] = useState("X")
    console.log(value, "value")

    const handleClick = (index:number) => {
        const updateValue=[...value]
        updateValue[index]=currentPlayer
        setValue(updateValue)
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
    }

    return (
        <div>
        <GameBoard onClick={handleClick} value={value}/>
        </div>
    )
}