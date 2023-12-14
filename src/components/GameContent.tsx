/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
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
        "&:hover": {
          transition: "background 0.4s ease-in-out",
          background: "#557086",
        },
      },
    },
  }),
};

const TILES = Array.from({ length: 25 }, (_, index) => index + 1);

export const GameContent = () => {
  return (
    <div css={styles.wrap}>
      <div>
        {TILES.map((tile) => (
          <button key={tile}></button>
        ))}
      </div>
    </div>
  );
};