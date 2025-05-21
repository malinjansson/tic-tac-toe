import { SquareBtn } from "./SquareBtn"

type gameBoardProps={
    value: string[], 
    onClick:(index:number)=>void
}

export const GameBoard = ({onClick, value}: gameBoardProps) => {
    return (
        <div>
            <div>
                <SquareBtn onClick={()=>onClick(0)} value={value[0]}/>
                <SquareBtn onClick={()=>onClick(1)} value={value[1]}/>
                <SquareBtn onClick={()=>onClick(2)} value={value[2]}/>
            </div>
            <div>
                <SquareBtn onClick={()=>onClick(3)} value={value[3]}/>
                <SquareBtn onClick={()=>onClick(4)} value={value[4]}/>
                <SquareBtn onClick={()=>onClick(5)} value={value[5]}/>
            </div>
            <div>
                <SquareBtn onClick={()=>onClick(6)} value={value[6]}/>
                <SquareBtn onClick={()=>onClick(7)} value={value[7]}/>
                <SquareBtn onClick={()=>onClick(8)} value={value[8]}/>
            </div>
        </div>
    )
}