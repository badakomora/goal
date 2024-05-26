/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect } from "react";
import { Tiles } from "./Tiles";

const styles = ({
  wrap: css({
  width: "100%",
  height: "45px",
  marginTop: "25px",
  "> button": {
    width: "100%",
    height: "100%",
    background: "#2f4553",
    borderRadius: "5px",
    border: "none",
    color:"white",
    "&:hover":{
      background: "#557086",
    }
  },
  })
})



// Utility function to generate a shuffled array of numbers from 0 to 14
const generateShuffledArray = () => {
  const array = Array.from({ length: 15 }, (_, index) => index);
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};



interface gameOverState{
  toggleBetButton: boolean;
  setToggleBetButton: React.Dispatch<React.SetStateAction<boolean>>;
  gameOver:boolean
  setGameOver:React.Dispatch<React.SetStateAction<boolean>>;
  minegem:boolean[],
  setMineGem:React.Dispatch<React.SetStateAction<boolean[]>>,
  shuffledTiles:number[],
  setShuffledTiles:React.Dispatch<React.SetStateAction<number[]>>,
  clickedButtons:boolean[],
  setClickedButtons: React.Dispatch<React.SetStateAction<boolean[]>>;
}

export const RandomPick:React.FC<gameOverState> = ({gameOver, setGameOver, setMineGem, setToggleBetButton, setClickedButtons, shuffledTiles, setShuffledTiles}) => {
  const TILES = Tiles()
  
  useEffect(() => {
    if (gameOver) {
      setShuffledTiles(generateShuffledArray());
    }
  }, [gameOver, setShuffledTiles, shuffledTiles]);

  const randomPick = () => {
    const randomIndex = Math.floor(Math.random() * shuffledTiles.length);
    const tileIndex = shuffledTiles[randomIndex];

    setMineGem(prevState => {
      const newState = [...prevState];
      newState[tileIndex] = true;
      return newState;
    });

    setClickedButtons(prevState => {
      const newState = [...prevState];
      newState[tileIndex] = true;
      return newState;
    });

    if (shuffledTiles[randomIndex] === 1) {
      setGameOver(true);
      setToggleBetButton(false);
      setMineGem(Array(TILES.length).fill(true));
    }
  }

  return (
    <div css={styles.wrap}>
      <button onClick={randomPick}>Pick Random Tile</button>
    </div>
  );
};
