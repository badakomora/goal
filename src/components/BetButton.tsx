/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const manualbetbutton = ({
  wrap: css({
  width: "100%",
  height: "45px",
  marginTop: "35px",
  "> button": {
    width: "100%",
    height: "100%",
    backgroundColor: "#00e701",
    borderRadius: "5px",
    border: "none",
    "&:hover": {
      backgroundColor: "#1fff20",
    }
  }
})
})

export const autobetbutton = ({
  wrap: css({
  width: "100%",
  height: "45px",
  marginTop: "35px",
    "> button": {
      width: "100%",
      height: "100%",
      backgroundColor: "#00b801",
      borderRadius: "5px",
      border: "none",
      "&:hover": {
        backgroundColor: "#00b801",
      },
  },
}),
})


interface betButtonProps{
  label:string,
}

export const BetButton:React.FC<betButtonProps> = ({label}) => {
  return (
    <div css={[manualbetbutton.wrap, autobetbutton.wrap]}>
      <button>{label}</button>
    </div>
  );
};
