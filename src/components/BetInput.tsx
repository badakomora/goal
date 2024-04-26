/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

const styles = {
  wrap: css({
    display: "block",
    marginTop: "10px",

    "> div:nth-of-type(1)":{
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "Sans-serif",
      fontSize: "12px",
      color: "white",
      marginBottom: "5px",
    },

    "> div:nth-of-type(2)":{
      width: "98%",
      height: "35px",
      background: "#2f4553",
      border: "#2f4553 2px solid",
      display: "block",

      "> div":{
        display: "flex",
        justifyContent: "space-between",
        height: "100%",
        width: "100%",

        "> div:nth-of-type(1)":{
          display: "flex",
          justifyContent: "space-between",
          width: "75%",
          height: "100%",
          background: "#0f212e",
          "> input":{
            width: "85%",
            border: "none",
            background: "#0f212e",
            outline:"none",
            color:"white",
            fontSize:"15px"
          },
          "> div":{
            margin: "auto",
            width: "15%",
            textAlign: "center",
            "> label":{
              width: "15%",
              color: "white",
              fontFamily: "Sans-serif",
              fontSize: "10px",
            }
          },
          "&:hover": {
            border: "2px solid #557086",
          },
        },

        "> div:nth-of-type(2)":{
          display: "flex",
          width: "30%",
          height: "100%",
          "> button:nth-of-type(1)":{
            background: "#2f4553",
            width: "50%",
            height: "100%",
            color: "white",
            border: "none",
            fontFamily: "Sans-serif",
            borderRight: "2px solid #0f212e",
            "&:hover": {
              background: "#557086",
              borderRadius: "1px",
            },
          },
          "> button:nth-of-type(2)":{
            background: "#2f4553",
            width: "50%",
            height: "100%",
            color: "white",
            border: "none",
            fontFamily: "Sans-serif",
            "&:hover": {
              background: "#557086",
              borderRadius: "1px",
            },
          }
        }


      }
    }
  }),
};

interface betInputProps{
  toggleBetButton:boolean
}


export const BetInput:React.FC<betInputProps> = ({toggleBetButton}) => {

  const [betamountValue, setBetamountValue] = useState(0)
  const betinputFun = (e:React.ChangeEvent<HTMLInputElement>) => {
      const betamount = parseInt(e.target.value)
     if(!isNaN(betamount)){
      setBetamountValue(betamount)
      }else{
        setBetamountValue(0)
      }
  }

  const incDecFun = (index: number) =>{
    if(index === 1){
     const newamountValue = betamountValue/2
     setBetamountValue(newamountValue)
    }else{
      const newamountValue = betamountValue*2
      setBetamountValue(newamountValue)
    }
  }

  const amountTabs = Array.from({ length: 2 }, (_, index) => index + 1);
  return (
    <div css={styles.wrap}>
      <div>
        <label>Bet Amount</label>
        <span>KES{betamountValue}</span>
      </div>

      <div>
        <div>
          <div>
            <input value={betamountValue} disabled={toggleBetButton} onChange={betinputFun} type="number" />
            <div>
              <label>KES</label>
            </div>
          </div>
          <div>
            {amountTabs.map((index) => (
              <button
                key={index}
                disabled={toggleBetButton}
                onClick={() => incDecFun(index)}
              >
                {index === 1 ? "\u00BD" : "2x"}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
