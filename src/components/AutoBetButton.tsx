/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";


const styles = {
  betbutton: css({
    width: "100%",
    height: "50px",
    marginTop: "40px",

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
};


export const AutoBetButton = () => {

  return (
    <div css={styles.betbutton}>
      <button>Start AutoBet</button>
    </div>
  );
};
