type squareProps={
    value: string,
    onClick: ()=>void
}

export const SquareBtn = ({onClick, value}: squareProps) => {
    return (
        <button type='button' onClick={onClick}>
            {value}
        </button>
    )
}