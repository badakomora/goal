/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const styles = {
  minesinput: css({
    width: "100%",
    height: "40px",
    marginTop: "9px",
    "> label":{
      color: "white",
      fontFamily: "Sans-serif",
      fontSize: "12px"
    },
    "> select":{
      width: "100%",
      height: "100%",
      color: "white",
      background: "#0f212e",
      border: "#2f4553 2px solid",
      marginTop: "4px",
      "&:hover ":{
        border: "2px solid #557086",
      },
      "> option": {
        width: "100%",
        height: "100%",
        color: "white",
        background: "#2f4553",
        border:"none",
      }
    },
  }),
};

const MINE_COUNT = Array.from({ length: 24 }, (_, index) => index + 1);

interface MineProps{
  mine:number,
  setMine:React.Dispatch<React.SetStateAction<number>>,
  toggleBetButton:boolean
}

export const MinesInput:React.FC<MineProps>  = ({mine, setMine, toggleBetButton}) => {
 
  const minesFun = (e:React.ChangeEvent<HTMLSelectElement>) =>{
    const mines = parseInt(e.target.value)
    setMine(mines)
  }

  return (
    <div css={styles.minesinput}>
      <label>Mines</label>
      <select value={mine} disabled={toggleBetButton} onChange={minesFun}>
        {MINE_COUNT.map((count) => (
          <option key={count}>{count}</option>
        ))}
      </select>
    </div>
  );
};
