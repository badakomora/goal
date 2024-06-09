export interface MinesGems {
    gem: number;
    mine: number;
    toggleBetButton: boolean;
    setToggleBetButton: React.Dispatch<React.SetStateAction<boolean>>;
    gameOver:boolean,
    setGameOver:React.Dispatch<React.SetStateAction<boolean>>;
    minegem:boolean[],
    setMineGem:React.Dispatch<React.SetStateAction<boolean[]>>,
    shuffledTiles:number[],
    setShuffledTiles:React.Dispatch<React.SetStateAction<number[]>>,
    clickedButtons:boolean[],
    setClickedButtons: React.Dispatch<React.SetStateAction<boolean[]>>;
  }

  