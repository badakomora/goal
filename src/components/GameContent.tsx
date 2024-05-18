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
        justifyContent:"center",
        display:"flex",
        "> span":{
          fontSize: "80px",
        },
        "&:hover": {
          transition: "background 0.4s ease-in-out",
          background: "#557086",
        },
      },
    },
  }),
};



interface MinesGems{
  gem:number,
  mine:number,
  toggleBetButton:boolean
}



const TILES = Array.from({ length: 25 }, (_, index) => index + 1);

export const GameContent:React.FC<MinesGems> = ({gem, mine, toggleBetButton}) => {

  const [minegem, setMineGem] = useState(Array(TILES.length).fill(false));
  
  const showMineGemFun =(index:number) =>{
      setMineGem(prevState => {
        const newState = [...prevState];
        newState[index] = true;
        return newState;
      })
  }

  return (
    <div css={styles.wrap}>
      <div>
        {TILES.map((tile, index) => (
          <button key={tile} disabled={!toggleBetButton} onClick={() =>showMineGemFun(index)}>
            {minegem[index] ? index < mine ? <span>&#128163;</span> : <span>&#128142;</span> : ""}
          </button>
        ))}
      </div>
    </div>
  );
};
