/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useState } from "react";


const OnWinStyles = ({
  wrap:css({
    display: 'block',
    marginTop: '35px',
    width: '100%',
    height: '50px',
    '> label': {
      color: 'white',
      fontFamily: 'Sans-serif',
      fontSize: '12px',
      height: '20%',
    },
    '> div': {
      display: 'flex',
      width: '100%',
      height: '80%',
      marginTop: '5px',
      background: '#2f4553',
      '> div': {
        margin: 'auto',
        display: 'flex',
        height: '90%',
        width: '98%',
        '> div': {
          display: 'flex',
          width: '52%',
          height: '99%',
          margin: 'auto',
          '> button': {
            background: '#0f212e',
            border: 'none',
            color: 'white',
            borderRadius: '5px',
            margin: '2px',
          },
          '> button:last-of-type': {
            background: '#2f4553',
            border: 'none',
            color: 'white',
            margin: '2px',
            '&:hover': {
              background: '#557086',
              borderRadius: '5px',
            },
          },
        },
        '> div:last-of-type': {
          width: '48%',
          height: '99%',
          display: 'flex',
          // background:  === 1 ? '#0f212e' : '#213743',
          margin: 'auto',
          '> input': {
            width: '85%',
            height: '97%',
            color: 'white',
            background: 'transparent',
            border: 'none',
            borderRadius: '3px',
            outline: 'none',
          },
          '& [data-resetincr="2"]': {
            background: '#213743',
          },
      
          '& [data-resetincr="1"]': {
            background: '#0f212e',
          },
          '> div': {
            display: 'flex',
            height: '100%',
            width: '15%',
            '> div': {
              margin: 'auto',
              '> span': {
                width: '100%',
                height: '100%',
                color: 'white',
                fontFamily: 'Sans-serif',
                fontSize: '12px',
              },
            },
          },
        },
      },
    },
  }),
});


export interface onWinProps {
  label: string;
  icon: string;
}

export const OnWin:React.FC<onWinProps> = ({label, icon}) => {
 
 
  const resetIncrArray = Array.from({ length: 2 }, (_, index) => index + 1);
  
  const [resetIncr, setresetIncr] = useState(1);
  const toggleRestIncrease = (index: number) => {
    setresetIncr(index);
  };

 

  return (
    <div css={OnWinStyles.wrap}>
      <label>{label}</label>
      <div>
        <div>
          <div>
            {resetIncrArray.map((button) => (
              <button 
              // css={resetIncr === button ? styles.btnreset : styles.btnincr}
              data-resetincr={button}
              onClick={() => toggleRestIncrease(button)}>
                {button === 1 ? "Reset" : "Increase by:"}
              </button>
            ))}
          </div>
          <div
          //  css={resetIncr === 2 ? styles.inputwrap : styles.toggleinputwrap}
          >
            <input
              type="number"
              disabled={resetIncr === 1 ? true : false}
              value={0}
            />
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
