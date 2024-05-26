/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";
import { FaRegGem , FaBomb } from 'react-icons/fa';
import{ Tiles } from './Tiles'
const styles = {
  wrap: css({
    width: "95%",
    height: "95%",
    margin: "auto",
    "> div": {
      display: "flex",
      justifyContent: "space-around",
      margin: "auto",
      flexWrap: "wrap",
      height: "95%",
      width: "95%",
      "> button": {
        borderRadius: "5px",
        background: "#2f4553",
        border: "none",
        width: "109.77px",
        height: "109.78px",
        boxShadow: "0 3px 2px rgba(0,0,0,.1)",
        margin:"auto",
        "> span[data-clicked=true]":{
          fontSize:"80px",
        },
        "> span[data-clicked=false]":{
          fontSize:"45px",
        },
        "&:hover": {
          transition: "background 0.4s ease-in-out",
          background: "#557086",
        },
      },
    },
  }),
};

interface MinesGems {
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



const shuffleArray = (array: any[]) => {
  const newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const GameContent: React.FC<MinesGems> = ({ gem, mine, toggleBetButton, setToggleBetButton, setGameOver, gameOver, setMineGem, minegem, shuffledTiles, clickedButtons, setShuffledTiles, setClickedButtons }) => {

  const TILES = Tiles()

  useEffect(() => {
    if (toggleBetButton) {
      setMineGem(Array(TILES.length).fill(false));
      setGameOver(false);
      setClickedButtons(Array(TILES.length).fill(false));
      const combinedArray = Array(mine).fill(1).concat(Array(gem).fill(2), Array(TILES.length - mine - gem).fill(0));
      const shuffled = shuffleArray(combinedArray);
      setShuffledTiles(shuffled);
    }
  }, [TILES.length, gem, mine, setClickedButtons, setGameOver, setMineGem, setShuffledTiles, toggleBetButton]);

  const showMineGemFun = (index: number) => {
    setMineGem(prevState => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });

    setClickedButtons(prevState => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });

    if (shuffledTiles[index] === 1) {
      setGameOver(true);
      setToggleBetButton(false);
      setMineGem(Array(TILES.length).fill(true));
    }
  };

  return (
    <div css={styles.wrap}>
      <div>
        {TILES.map((tileIndex:number) => (
          <button
            key={tileIndex}
            disabled={gameOver && !clickedButtons[tileIndex - 1]} 
            onClick={() => showMineGemFun(tileIndex - 1)}
          >
            {
              minegem[tileIndex - 1] ? (
                shuffledTiles[tileIndex - 1] === 1 ? (
                  <span data-clicked={clickedButtons[tileIndex - 1]}><FaBomb /></span>
                ) : shuffledTiles[tileIndex - 1] === 2 ? (
                  <span data-clicked={clickedButtons[tileIndex - 1]}><FaRegGem /></span>
                ) : ""
              ) : ""
            }
          </button>
        ))}
      </div>
    </div>
  );
};