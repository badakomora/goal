/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

const styles = {
  wrap: css({
    display: "block",
    marginTop: "30px",
    width: "100%",
    height: "42px",

    "> label": {
      height: "20%",
      color: "white",
      fontFamily: "Sans-serif",
      fontSize: "12px",
    },
    "> div":{
      display: "flex",
      width: "100%",
      height: "100%",
      marginTop: "5px",
      background: "#2f4553",

      "> div":{
        margin: "auto",
        display: "flex",
        height: "90%",
        width: "98%",



        "> div:first-of-type":{
          display: "flex",
          width: "52%",
          height: "99%",
          margin: "auto",

          "> button:first-of-type":{
            background: "#0f212e",
            border: "none",
            color: "white",
            borderRadius: "5px",
            margin: "2px",
          },
          "> button:nth-of-type(2) ":{
            background: "#2f4553",
            border: "none",
            color: "white",
            margin: "2px",
            "&:hover": {
              background: "#557086",
              borderRadius: "5px",
            },
          },


          "> button:first-of-type[data-buttomState='enabled']":{
            background: "#2f4553",
            border: "none",
            color: "white",
            borderRadius: "5px",
            margin: "2px",
            "&:hover": {
              background: "#557086",
              borderRadius: "5px",
            },
          },
          "> button:nth-of-type(2)[data-buttomState='enabled']":{
            background: "#0f212e",
            borderRadius: "5px",
            border: "none",
            color: "white",
            margin: "2px",
          },
        },



        "> div:nth-of-type(2)[data-inputState='enabled']":{
            width: "48%",
            height: "99%",
            display: "flex",
            background: "#0f212e",
            // background: "#213743",
            margin: "auto",
            "> input": {
              width: "85%",
              height: "97%",
              color: "white",
              background: "transparent",
              border: "none",
              borderRadius: "3px",
              outline: "none",
            },
            "> div":{
              display: "flex",
              height: "100%",
              width: "15%",
              "> div":{
                margin: "auto",
                "> span":{
                  width: "100%",
                  height: "100%",
                  color: "white",
                  fontFamily: "Sans-serif",
                  fontSize: "12px",
                }
              }
            },
        },



        "> div:nth-of-type(2)[data-inputState='disabled']":{
          width: "48%",
          height: "99%",
          display: "flex",
          background: "#213743",
          margin: "auto",
          "> input": {
            width: "85%",
            height: "97%",
            color: "white",
            background: "transparent",
            border: "none",
            borderRadius: "3px",
            outline: "none",
            cursor: "no-drop",
          },
          "> div":{
            display: "flex",
            height: "100%",
            width: "15%",
            "> div":{
              margin: "auto",
              "> span":{
                width: "100%",
                height: "100%",
                color: "white",
                fontFamily: "Sans-serif",
                fontSize: "12px",
              }
            }
          },
      },
      }
    }
  }),


};

interface onWinProps{
  label:string,
}


export const OnWinLoss:React.FC<onWinProps> = ({label}) => {
  const [resetIncr, setresetIncr] = useState(1);
  const resetIncrArray = Array.from({ length: 2 }, (_, index) => index + 1);
  const toggleRestIncrease = (index: number) => {
    setresetIncr(index);
    console.log(index)
  };

  return (
    <div css={styles.wrap}>
      <label>{label}</label>
      <div>
        <div>
        <div>
            {resetIncrArray.map((button) => (
            <button data-buttomState={resetIncr === 1 ? "disabled" : "enabled"}  key={button}  onClick={() => toggleRestIncrease(button)}>
                {button === 1 ? "Reset" : "Increase by:"}
            </button>         
            ))}
          </div>
          <div data-inputState={resetIncr === 1 ? "disabled" : "enabled"}>
              <input
              type="number"
              disabled={resetIncr === 1 ? true : false}
              value={0} />
              <div>
                <div>
                  <span>%</span>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};
