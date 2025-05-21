type selectPlayerProps={
    setCurrentPlayer: (value:string) => void;
}

export const SelectPlayer = ({ setCurrentPlayer }: selectPlayerProps) => {
    const handleX = () => {
      setCurrentPlayer("X");
    };
  
    const handleO = () => {
      setCurrentPlayer("O");
    };
  
    return (
      <div>
        <h3>Select player</h3>
        <button type="button" onClick={handleX}>X</button>
        <button type="button" onClick={handleO}>O</button>
      </div>
    );
  };