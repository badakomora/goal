/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const styles = {
  minesinput: css({
    width: "100%",
    height: "40px",
    marginTop: "9px"
  }),
  input: css({
    width: "100%",
    height: "100%",
    color: "white",
    background: "#0f212e",
    border: "#2f4553 2px solid",
    marginTop: "4px",
    "> option": {
      width: "100%",
      height: "100%",
      color: "white",
      backgroundColor: "#0f212e"
    }
  }),
  label: css({
    color: "white",
    fontFamily: "Sans-serif",
    fontSize: "12px"
  })
};

const MINE_COUNT = Array.from({ length: 24 }, (_, index) => index + 1);

export const MinesInput = () => {
  return (
    <div css={styles.minesinput}>
      <span css={styles.label}>Mines</span>
      <select css={styles.input}>
        {MINE_COUNT.map((count) => (
          <option key={count} value="">{count}</option>
        ))}
      </select>
    </div>
  );
};
