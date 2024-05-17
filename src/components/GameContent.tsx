/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
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


//Apa ndo sina clue at all, haha

interface MinesGems{
  gem:number,
  mine:number,
}



const TILES = Array.from({ length: 25 }, (_, index) => index + 1);

export const GameContent:React.FC<MinesGems> = ({gem, mine}) => {

  const MINES = Array.from({ length: mine }, (_, index) => index + 1);
  // const GEMS = Array.from({ length: gem }, (_, index) => index + 1);
  return (
    <div css={styles.wrap}>
      <div>
        {TILES.map((tile, index) => (
          <button key={tile}>
            {index < MINES.length ? <span>&#128163;</span> : <span>&#128142;</span>}
          </button>
        ))}
      </div>
    </div>
  );
};
