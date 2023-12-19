/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const styles = ({
  wrap: css({
  width: "100%",
  height: "45px",
  marginTop: "35px",
  "> button[data-betbutton='2']": {
    width: "100%",
    height: "100%",
    background: '#00b801',
    borderRadius: "5px",
    border: "none",
    "&:hover": {
      backgroundColor: "#1fff20",
    }
  },
  "> button[data-betbutton='1']": {
    width: "100%",
    height: "100%",
    background: '#00e701',
    borderRadius: "5px",
    border: "none",
    "&:hover": {
      backgroundColor: "#1fff20",
    }
  }
  })
})


interface betButtonProps{
  label:string,
  databetbutton:number
}

export const BetButton:React.FC<betButtonProps> = ({label, databetbutton}) => {
  return (
    <div css={styles.wrap}>
      <button data-betbutton={databetbutton}>{label}</button>
    </div>
  );
};
