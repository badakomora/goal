/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
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
        "&:hover": {
          transition: "background 0.4s ease-in-out",
          background: "#557086",
        },
      },
    },
  }),
};


interface gamecontentProps{
  gem:number,
  mine:number
}


const TILES = Array.from({ length: 25 }, (_, index) => index + 1);


export const GameContent:React.FC<gamecontentProps> = ({gem, mine}) => {

  const [showMineGem,  setShowMineGem] = useState(Array(25).fill(false));
  const minesGem = (tile: number) => {
    const updatedShowMineGem = [...showMineGem];
    updatedShowMineGem[tile - 1] = true;
    setShowMineGem(updatedShowMineGem);
  }
  return (
    <div css={styles.wrap}>
      <div>
        {TILES.map((tile) => (
          <button key={tile} onClick={() => minesGem(tile)}>
            {showMineGem[tile - 1] ? '♦️' : ''}
          </button>
        ))}
      </div>
    </div>
  );
};
