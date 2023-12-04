/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

export const BetInput = () => {
    const betinput = ({
        betinput:css({
            width:"100%"
        }),
        wrap:css({
            display:"flex",
            height:"35px",
            background: "#2f4553",
        }),
        inputwrap:css({
            display:"flex",
            width:"70%",
            height:"90%",
            margin:"auto"
        }),
        inputbuttons:css({
            display:"flex",
            width:"30%",
        }),
        input:css({
            width:"80%"
        }),
        amounticon:css({
            marginTop:"6px",
            color:"white",
            width:"20%"
        }),
        amounthalf:css({
            background: "#2f4553",
            width:"50%",
            height:"35px",
            color:"white"
        }),
        amountdouble:css({
            background: "#2f4553",
            width:"50%",
            height:"35px",
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
                    <span css={betinput.amounticon}>KES</span>
                </div>
                <div css={betinput.inputbuttons}>
                    <button css={betinput.amounthalf}>1/2</button>
                    <button css={betinput.amountdouble}>2x</button>
                </div>
            </div>
        </div>
    )
}