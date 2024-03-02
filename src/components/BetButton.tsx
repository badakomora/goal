/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const styles = ({
  wrap: css({
  width: "100%",
  height: "45px",
  marginTop: "35px",
  "> button[data-betbutton='2'],[data-betbutton='3']": {
    width: "100%",
    height: "100%",
    background: '#00b801',
    borderRadius: "5px",
    border: "none",
    cursor:"no-drop"
  },
  "> button[data-betbutton='1']": {
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

  const betFun = () =>{
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
