/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const styles = ({
  wrap: css({
  width: "100%",
  height: "45px",
  "> button[data-betbutton='3']": {
    marginTop: "38px",
    width: "100%",
    height: "100%",
    background: '#00b801',
    borderRadius: "5px",
    border: "none",
  },
  "> button[data-betbutton='2']":{
    marginTop: "18px",
    width: "100%",
    height: "100%",
    background: '#00b801',
    borderRadius: "5px",
    border: "none",
  },
  "> button[data-betbutton='1']": {
    marginTop: "40px",
    width: "100%",
    height: "100%",
    background: '#00e701',
    borderRadius: "5px",
    border: "none",
    cursor:"pointer",
    "&:hover": {
      backgroundColor: "#1fff20",
    }
  }
  })
})


interface betButtonProps{
  label:string,
  databetbutton:number,
  togglebetButton:boolean,
  setToggleBetButton:React.Dispatch<React.SetStateAction<boolean>>
}

export const BetButton:React.FC<betButtonProps> = ({label, databetbutton, setToggleBetButton}) => {

  const betFun = () => {
    if(databetbutton === 1){
      setToggleBetButton(true)
    }
  }
  
  return (
    <div css={styles.wrap}>
      <button data-betbutton={databetbutton} onClick={betFun}>{label}</button>
    </div>
  );
};
