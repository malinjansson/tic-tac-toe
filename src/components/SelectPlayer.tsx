type selectPlayerProps={
    setCurrentPlayer: (value:string) => void;
}

export const SelectPlayer = (props: selectPlayerProps) => {
    const handleX = () => {
      props.setCurrentPlayer("X");
    };
  
    const handleO = () => {
      props.setCurrentPlayer("O");
    };
  
    return (
      <div className="select-player">
        <h2>Select player</h2>
        <button type="button" className="player-btn" onClick={handleX}>X</button>
        <button type="button" className="player-btn" onClick={handleO}>O</button>
      </div>
    );
  };