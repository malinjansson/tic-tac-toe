type displayText={
    winner: string | null,
    isDrawMatch: boolean,
    currentPlayer: string,
}

export const DisplayText = (props: displayText) => {
    return (
      <div>
        {props.winner ? ( <h2>Winner: {props.winner}</h2>) : props.isDrawMatch ? (
            <h2>Draw Match</h2>
          ) : (<h2>Player: {props.currentPlayer}</h2>)}
      </div>
    );
  };