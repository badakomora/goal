/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { FaGem, FaBomb } from 'react-icons/fa';
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
        "> span[data-clicked=mine]":{
          margin:"auto",
          fontSize:"80px",
          // color: "red",
        },
        "> span[data-clicked=gem]":{
          margin:"auto",
          fontSize:"80px",
          // color: "#00e701",
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
}

const TILES = Array.from({ length: 25 }, (_, index) => index + 1);

const shuffleArray = (array: any[]) => {
  const newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const GameContent: React.FC<MinesGems> = ({ gem, mine, toggleBetButton, setToggleBetButton }) => {
  
  const [minegem, setMineGem] = useState<boolean[]>(Array(TILES.length).fill(false));
  const [shuffledTiles, setShuffledTiles] = useState<number[]>([]);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [clickedButtons, setClickedButtons] = useState<boolean[]>(Array(TILES.length).fill(false));

  useEffect(() => {
    if (toggleBetButton) {
      setMineGem(Array(TILES.length).fill(false));
      setGameOver(false);
      setClickedButtons(Array(TILES.length).fill(false));
      const combinedArray = Array(mine).fill(1).concat(Array(gem).fill(2), Array(TILES.length - mine - gem).fill(0));
      const shuffled = shuffleArray(combinedArray);
      setShuffledTiles(shuffled);
    }
  }, [gem, mine, toggleBetButton]);

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
        {TILES.map((tileIndex) => (
          <button
            key={tileIndex}
            disabled={gameOver && !clickedButtons[tileIndex - 1]} // Disable all buttons if game over except clicked ones
            onClick={() => showMineGemFun(tileIndex - 1)}
          >
            {
              minegem[tileIndex - 1] ? (
                shuffledTiles[tileIndex - 1] === 1 ? (
                  <span data-clicked="mine"><FaBomb /></span>
                ) : shuffledTiles[tileIndex - 1] === 2 ? (
                  <span data-clicked="gem"><FaGem /></span>
                ) : ""
              ) : ""
            }
          </button>
        ))}
      </div>
    </div>
  );
};