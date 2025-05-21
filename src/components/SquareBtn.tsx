type squareProps={
    value: string,
    onClick: ()=>void
}

export const SquareBtn = (props: squareProps) => {
    return (
        <button type='button' className="square-btn" onClick={props.onClick}>
            <span className="value">{props.value}</span>
        </button>
    )
}