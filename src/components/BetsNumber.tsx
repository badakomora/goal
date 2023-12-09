/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

const betsnumber = ({
    wrap:css({
        width:"98%",
        height:"38px",
        marginTop:"30px",
    }),
    label:css({
        color:"white",
        fontFamily:"Sans-serif",
        fontSize:"12px",
    }),
    input:css({
        width:"100%",
        height:"100%",
        color:"white",
        background:"#0f212e",
        border:"#2f4553 2px solid",
        marginTop:"4px"
    }),
})
export const BetsNumber = () =>{
    return(
        <div css={betsnumber.wrap}>
            <span css={betsnumber.label}>
                Number of Bets
            </span>
            <input type="number" css={betsnumber.input} />
            <span></span>
        </div>
    )
}