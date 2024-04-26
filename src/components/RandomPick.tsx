/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const styles = ({
  wrap: css({
  width: "100%",
  height: "45px",
  marginTop: "25px",
  "> button": {
    width: "100%",
    height: "100%",
    background: "#2f4553",
    borderRadius: "5px",
    border: "none",
    color:"white",
    "&:hover":{
      background: "#557086",
    }
  },
  })
})


export const RandomPick = () => {

  return (
    <div css={styles.wrap}>
      <button>Pick Random Tile</button>
    </div>
  );
};
