/** @jsxImportSource @emotion/react */
import { onWinProps, resetIncrBtnPrps,  } from "../types";




export const OnWin:React.FC<onWinProps & resetIncrBtnPrps> = ({label, icon, cssStyles, resetIncr, setresetIncr}) => {

 
  const resetIncrArray = Array.from({ length: 2 }, (_, index) => index + 1);
  const toggleRestIncrease = (index: number) => {
    setresetIncr(index);
  };

  return (
    <div css={cssStyles}>
      <label>{label}</label>
      <div>
        <div>
          <div>
            {resetIncrArray.map((button) => (
              <button 
              // css={resetIncr === button ? styles.btnreset : styles.btnincr}
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
