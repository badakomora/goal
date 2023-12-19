/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const styles = ({
  wrap: css({
  width: "100%",
  height: "45px",
  marginTop: "35px",
  "> button": {
    width: "100%",
    height: "100%",
    '& [data-betbutton="2"]': {
      background: '#00b801"',
    },

    '& [data-betbutton="1"]': {
      background: '#00e701',
    },
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
