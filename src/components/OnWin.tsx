/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"


const styles = ({
    wrap:css({
        display:"block",
        marginTop:"35px",
        width:"100%",
        height:"40px"
    }),
    buttoninput:css({
        display:"flex",
        width:"100%",
        height:"100%",
        marginTop:"5px",
        background: "#2f4553",
    }),
    label:css({
        color:"white",
        fontFamily:"Sans-serif",
        fontSize:"12px",
    }),
    buttonswrap:css({
        display:"flex",
        width:"52%",
        height:"90%",
        margin:"auto"
    }),
    inputwrap:css({
        width:"48%",
        height:"90%",
        display:"flex",
        background:"#2f4553",
        margin:"auto",
        "> input":{
            width:"80%",
            height:"90%",
            color:"white",
            background:"#2f4553",
            border:"none"
        },
    }),
    iconwrap:css({
        margin:"auto",
        height:"90%",
        width:"22%",
        background:"#2f4553",
    }),
    icon:css({
        width:"8%",
        color:"white",
        fontFamily:"Sans-serif",
        fontSize:"10px",
    }),
    container:css({
        margin:"auto",
        display:"flex",
        height:"90%",
        width:"98%"
    }),
    btnincr:css({
        background: "#2f4553",
        border:"none",
        color:"white"
    }),
    btnreset:css({
        background:"#0f212e",
        border:"none",
        color:"white",
        borderRadius:"5px"
    })
})
export const OnWin = () =>{
    return(
        <div css={styles.wrap}>
            <span css={styles.label}>On Win</span>
            <div css={styles.buttoninput}>
                <div css={styles.container}>
                <div css={styles.buttonswrap}>
                    <button css={styles.btnreset}>Reset</button>
                    <button css={styles.btnincr}>Increase by:</button>
                </div>
                <div css={styles.inputwrap}>
                    <input type="number" value={0} />
                    <div css={styles.iconwrap}>
                        <span css={styles.icon}>KES</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}