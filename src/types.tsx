import { SerializedStyles } from "@emotion/react";

export interface resetIncrBtnPrps{
    resetIncr:number, 
    setresetIncr:React.Dispatch<React.SetStateAction<number>>,
}

export interface onWinProps{
  label:string,
  icon:string,
  cssStyles:SerializedStyles,
}