/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
export const BetButton = () => {
    const betbutton = ({
        betbutton:css({
            width:"100%",
            height:"35px",
            marginTop:"10px"
        }),
        button:css({
            width:"100%",
            height:"100%"
        })
    })
    return(
        <div css={betbutton.betbutton}>
            <div className="wrap">
                <button css={betbutton.button}>Bet</button>
            </div>
        </div>
    )
}