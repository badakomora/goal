/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

export const BetInput = () => {
    const betinput = ({
        betinput:css({
            width:"100%",
            height:"35px",
            background: "#2f4553",
        }),
        wrap:css({
            display:"flex",
            height:"100%",
        }),
        inputwrap:css({ 
            display:"flex",
            width:"70%",
            height:"100%",
            margin:"auto",
        }),
        inputbuttons:css({
            display:"flex",
            width:"30%",
            height:"100%",
        }),
        input:css({
            width:"80%",
        }),
        amounticon:css({
            margin:"auto",
            color:"white",
            width:"20%",
        }),
        amounthalf:css({
            background: "#2f4553",
            width:"50%",
            height:"100%",
            color:"white"
        }),
        amountdouble:css({
            background: "#2f4553",
            width:"50%",
            height:"100%",
            color:"white"
        })
    })
    return(
        <div css={betinput.betinput}>
            <div className="amountlabel">
                
            </div>
            <div css={betinput.wrap}>
                <div css={betinput.inputwrap}>
                    <input css={betinput.input} type="number" />
                    <div css={betinput.amounticon}>
                        <span>KES</span>
                    </div>
                </div>
                <div css={betinput.inputbuttons}>
                    <button css={betinput.amounthalf}>1/2</button>
                    <button css={betinput.amountdouble}>2x</button>
                </div>
            </div>
        </div>
    )
}