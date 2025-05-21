type squareProps={
    value: string,
    onClick: ()=>void
}

export const SquareBtn = (props: squareProps) => {
    return (
        <button type='button' onClick={props.onClick}>
            {props.value}
        </button>
    )
}