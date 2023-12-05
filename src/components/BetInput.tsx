/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

export const BetInput = () => {
    const betinput = ({
        betinput:css({
            width:"98%",
            height:"35px",
            background: "#2f4553",
            border:"#2f4553 2px solid",
            display:"block"
        }),
        wrap:css({
            display:"flex",
            justifyContent:"space-between",
            height:"100%",
            width:"100%",
            // background:"white",
            background:"#0f212e"
        }),
        amountlabel:css({
            display:"flex",
            justifyContent:"space-between",
            fontFamily:"Sans-serif",
            fontSize:"13px",
            color:"white"
        }),
        inputwrap:css({ 
            display:"flex",
            justifyContent:"space-between",
            width:"75%",
            height:"100%",
            // border:"#2f4553 2px solid",
            // background:"white"
            background:"#0f212e"
        }),
        buttonswrap:css({
            display:"flex",
            width:"25%",
            height:"100%",
            // border:"#2f4553 2px solid",
        }),
        input:css({
            width:"85%",
            border:"none",
            background:"#0f212e"
        }),
        iconwrap:css({
            margin:"auto",
            width:"15%",
            textAlign:"center"
        }),
        icon:css({
            width:"15%",
            color:"white",
            fontFamily:"Sans-serif",
            fontSize:"10px",
        }),
        amounthalf:css({
            background: "#2f4553",
            width:"50%",
            height:"100%",
            color:"white",
            border:"none",
            fontFamily:"Sans-serif",
            borderRight: "2px solid #0f212e",
        }),
        amountdouble:css({
            background: "#2f4553",
            width:"50%",
            height:"100%",
            color:"white",
            border:"none",
            fontFamily:"Sans-serif",
        }),
        container:css({
            display:"block",
            marginTop:"10px"
        })
    })
    return(
        <div css={betinput.container}>
            <div css={betinput.amountlabel}>
                <span>Bet Amount</span>
                <span>KES0.00</span>
            </div>
            <div css={betinput.betinput}>
                <div css={betinput.wrap}>
                    <div css={betinput.inputwrap}>
                        <input css={betinput.input} type="number" />
                        <div css={betinput.iconwrap}>
                            <span css={betinput.icon}>KES</span>
                        </div>
                    </div>
                    <div css={betinput.buttonswrap}>
                        <button css={betinput.amounthalf}>&frac12;</button>
                        <button css={betinput.amountdouble}>2x</button>
                    </div>
                </div>
            </div>
        </div>
    )
}