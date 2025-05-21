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
      <div>
        <h3>Select player</h3>
        <button type="button" onClick={handleX}>X</button>
        <button type="button" onClick={handleO}>O</button>
      </div>
    );
  };