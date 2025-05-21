import { useEffect, useState } from "react"
import { GameBoard } from "./GameBoard";
import { SelectPlayer } from "./SelectPlayer";

export const TicTacToe = () => {

    const [value, setValue] = useState(Array(9).fill(null));
    const[currentPlayer, setCurrentPlayer] = useState("X")
    const [winner, setWinner] = useState(null)
    const [isDrawMatch, setIsDrawMatch] = useState(false)

    const checkTheWinner = () => {
        const winIndexs = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        for(let i = 0;i <winIndexs.length;i++){
            const[a,b,c]=winIndexs[i]
            if(value[a] === value[b] && value [a] === value[c]){
                return value[a]
            }
        }
        return null
    }

    const isBoardFull = () => {
        return value.every((square) => square !== null)
    }

    const handleClick = (index:number) => {
        if(value[index]===null && !winner && !isDrawMatch) {
            const updateValue=[...value]
            updateValue[index]=currentPlayer
            setValue(updateValue)
            setCurrentPlayer(currentPlayer === "X" ? "O" : "X") 
        } 
    }

    useEffect (() => {
        const newWinner = checkTheWinner()
        if (newWinner) {
          setWinner(newWinner);
        } else if (isBoardFull()) {
            setIsDrawMatch (true)
        }
    })

    const handleNewGame = () => {
        setValue(Array(9).fill(null))
        setWinner (null)
        setIsDrawMatch(false)
    }
 
    return (
        <div>
          {winner ? ( <h2>Winner: {winner}</h2>) : isDrawMatch ? (
            <h2>Draw Match</h2>
          ) : (<h2>Player: {currentPlayer}</h2>)}
          <GameBoard onClick={handleClick} value={value} />
          <SelectPlayer setCurrentPlayer={setCurrentPlayer}/>
          <button type="button" onClick={handleNewGame}>Start New Game</button>
        </div>
      );
}