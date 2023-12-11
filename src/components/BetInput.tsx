/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

//tod:rename css object to styles

const styles = ({
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
        fontSize:"12px",
        color:"white",
        marginBottom:"5px"
    }),
    inputwrap:css({ 
        display:"flex",
        justifyContent:"space-between",
        width:"75%",
        height:"100%",
        background:"#0f212e"
    }),
    buttonswrap:css({
        display:"flex",
        width:"25%",
        height:"100%",
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

export const BetInput = () => {
 
    return(
        <div css={styles.container}>
            <div css={styles.amountlabel}>
                <span>Bet Amount</span>
                <span>KES0.00</span>
            </div>
            <div css={styles.betinput}>
                <div css={styles.wrap}>
                    <div css={styles.inputwrap}>
                        <input css={styles.input} type="number" />
                        <div css={styles.iconwrap}>
                            <span css={styles.icon}>KES</span>
                        </div>
                    </div>
                    <div css={styles.buttonswrap}>
                        <button css={styles.amounthalf}>&frac12;</button>
                        <button css={styles.amountdouble}>2x</button>
                    </div>
                </div>
            </div>
        </div>
    )
}