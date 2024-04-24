/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

const styles = {
  betinput: css({
    width: "98%",
    height: "35px",
    background: "#2f4553",
    border: "#2f4553 2px solid",
    display: "block",
  }),
  wrap: css({
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
    width: "100%"
  }),
  amountlabel: css({
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "Sans-serif",
    fontSize: "12px",
    color: "white",
    marginBottom: "5px",
  }),
  inputwrap: css({
    display: "flex",
    justifyContent: "space-between",
    width: "75%",
    height: "100%",
    background: "#0f212e",
    "&:hover": {
      border: "2px solid #557086",
    },
  }),
  buttonswrap: css({
    display: "flex",
    width: "30%",
    height: "100%",
  }),
  input: css({
    width: "85%",
    border: "none",
    background: "#0f212e",
    outline:"none",
    color:"white",
    fontSize:"15px"
  }),
  iconwrap: css({
    margin: "auto",
    width: "15%",
    textAlign: "center",
  }),
  icon: css({
    width: "15%",
    color: "white",
    fontFamily: "Sans-serif",
    fontSize: "10px",
  }),
  amounthalf: css({
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
  }),
  amountdouble: css({
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
  }),
  container: css({
    display: "block",
    marginTop: "10px",
  }),
};

export const BetInput = () => {

  const [betamountValue, setBetamountValue] = useState(0)
  const betinputFun = (e:React.ChangeEvent<HTMLInputElement>) => {
      const betamount = parseInt(e.target.value)
     if(!isNaN(betamount)){
      setBetamountValue(betamount)
      }else{
        setBetamountValue(0)
      }
  }

  const incDecFun = () =>{
    
  }

  const amountTabs = Array.from({ length: 2 }, (_, index) => index + 1);
  return (
    <div css={styles.container}>
      <div css={styles.amountlabel}>
        <span>Bet Amount</span>
        <span>KES{betamountValue}</span>
      </div>
      <div css={styles.betinput}>
        <div css={styles.wrap}>
          <div css={styles.inputwrap}>
            <input css={styles.input} value={betamountValue} onChange={betinputFun} type="number" />
            <div css={styles.iconwrap}>
              <span css={styles.icon}>KES</span>
            </div>
          </div>
          <div css={styles.buttonswrap}>
            {amountTabs.map((amountTab) => (
              <button
                key={amountTab}
                css={amountTab === 1 ? styles.amounthalf : styles.amountdouble}
                onClick={incDecFun}
              >
                {amountTab === 1 ? "\u00BD" : "2x"}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
