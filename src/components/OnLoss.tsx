/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"


const styles = ({
    wrap:css({
        display:"block",
        marginTop:"35px",
        width:"100%",
        height:"42px",
    }),
    buttoninput:css({
        display:"flex",
        width:"100%",
        height:"100%",
        marginTop:"5px",
        background: "#2f4553",
    }),
    container:css({
        margin:"auto",
        display:"flex",
        height:"90%",
        width:"98%"
    }),
    label:css({
        color:"white",
        fontFamily:"Sans-serif",
        fontSize:"12px",
    }),
    buttonswrap:css({
        display:"flex",
        width:"52%",
        height:"99%",
        margin:"auto"
    }),
    inputwrap:css({
        width:"48%",
        height:"99%",
        display:"flex",
        background:"#2f4553",
        margin:"auto",
        "> input":{
            width:"85%",
            height:"97%",
            color:"white",
            background:"#213743",
            border:"none",
            borderRadius:"2px"
        },
    }),
    iconouterwrap:css({
        display:"flex",
        height:"100%",
        width:"15%",
        background:"#213743",
      
    }),
    icon:css({
        width:"100%",
        height:"100%",
        color:"white",
        fontFamily:"Sans-serif",
        fontSize:"15px",
    }),
    btnincr:css({
        background: "#2f4553",
        border:"none",
        color:"white",
        margin:"2px",
        "&:hover":{
            background:"#557086",
            borderRadius:"5px",
        }
    }),
    btnreset:css({
        background:"#0f212e",
        border:"none",
        color:"white",
        borderRadius:"5px",
        margin:"2px"
    }),
    iconinnerwrap:css({
        margin:"auto",
    })
})
export const OnLoss = () =>{
    return(
        <div css={styles.wrap}>
            <span css={styles.label}>On Loss</span>
            <div css={styles.buttoninput}>
                <div css={styles.container}>
                    <div css={styles.buttonswrap}>
                        <button css={styles.btnreset}>Reset</button>
                        <button css={styles.btnincr}>Increase by:</button>
                    </div>
                    <div css={styles.inputwrap}>
                        <input type="number" value={0} />
                        <div css={styles.iconouterwrap}>
                            <div css={styles.iconinnerwrap}>
                                <span css={styles.icon}>%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}