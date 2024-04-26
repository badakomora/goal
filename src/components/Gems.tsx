/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ChangeEvent} from "react";

const styles = {
  gems: css({
    width: "95%",
    height: "35px",
    marginTop: "10px",
    "> label": {
        color: "white",
        fontFamily: "Sans-serif",
        fontSize: "12px"
      },
    "> input": {
      width: "100%",
      height: "100%",
      color: "white",
      backgroundColor: "#0f212e",
      border:"none",
      marginTop: "4px",
      "&:hover ":{
        border: "2px solid #557086",
      }
    }     
  }),
};

interface gemProps{
    gem:number,
    setGem:React.Dispatch<React.SetStateAction<number>>,
    toggleBetButton:boolean,
}

export const Gems:React.FC<gemProps> = ({gem, setGem, toggleBetButton}) => {

 const GemFun = (e: ChangeEvent<HTMLInputElement>) => {
    const mines = parseInt(e.target.value)
    setGem(mines)
 }

  return (
    <div css={styles.gems}>
      <label>Gems</label>
      <input value={gem} disabled={toggleBetButton} onChange={GemFun} />
    </div>
  );
};

