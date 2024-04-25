/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ChangeEvent} from "react";

const styles = {
  minesinput: css({
    width: "95%",
    height: "35px",
    marginTop: "9px",
  }),
  input: css({
    width: "100%",
    height: "100%",
    color: "white",
    background: "#0f212e",
    border: "#2f4553 2px solid",
    marginTop: "4px",
    "&:hover ":{
      border: "2px solid #557086",
    },
    "> input": {
      width: "100%",
      height: "100%",
      color: "white",
      backgroundColor: "#0f212e",
      outline:"none"
    }
  }),
  label: css({
    color: "white",
    fontFamily: "Sans-serif",
    fontSize: "12px"
  })
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
    <div css={styles.minesinput}>
      <span css={styles.label}>Gems</span>
      <input css={styles.input} value={gem} disabled={toggleBetButton} onChange={GemFun} />
    </div>
  );
};

