/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
export const BetButton = () => {
    const betbutton = ({
        betbutton:css({
            width:"100%",
            height:"45px",
            marginTop:"30px",
        }),
        button:css({
            width:"100%",
            height:"100%",
            backgroundColor:"#00e701",
            borderRadius:"5px",
            border:"none",
            "&:hover": {
                backgroundColor: "#1fff20",
              },
        })
    })
    return(
        <div css={betbutton.betbutton}>
                <button css={betbutton.button}>Bet</button>
        </div>
    )
}