/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
export const styles = {
  wrap: css({
    display: "block",
    width: "100%",
    height: "50px",
    marginTop: "30px",
    "> label": {
      height: "20%",
      color: "white",
      fontFamily: "Sans-serif",
      fontSize: "12px",
    },
    "> div": {
      display: "flex",
      width: "100%",
      background: "#2f4553",
      height: "80%",
      marginTop: "5px",
      "> div": {
        margin: "auto",
        display: "flex",
        height: "90%",
        width: "98%",
        background: "#0f212e",
        "&:hover ":{
          border: "2px solid #557086",
        },
        "> div": {
          width: "100%",
          height: "100%",
          display: "flex",
          background: "transparent",
          margin: "auto",
          "> input": {
            width: "85%",
            height: "97%",
            color: "white",
            background: "transparent",
            border: "none",
            borderRadius: "3px",
            outline:"none"
          },
          "> div": {
            display: "flex",
            height: "100%",
            width: "15%",
            "> div": {
              margin: "auto",
              "> span": {
                width: "100%",
                height: "100%",
                color: "white",
                fontFamily: "Sans-serif",
                fontSize: "10px",
              },
            },
          },
        },
      },
    },
  }),
};

interface betsNumberProps {
  label: string;
  icon: string;
  toggleBetButton:boolean
}
export const FancyComp: React.FC<betsNumberProps> = ({ label, icon, toggleBetButton }) => {
  return (
    <div css={styles.wrap}>
      <label>{label}</label>
      <div>
        <div>
          <div>
            <input type="number" value={0} disabled={toggleBetButton} />
            <div>
              <div>
                <span>{icon}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
