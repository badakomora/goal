/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";


const styles = {
  betbutton: css({
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
      },
    },
  }),
};


export const BetButton = () => {

  return (
    <div css={styles.betbutton}>
      <button>Bet</button>
    </div>
  );
};
