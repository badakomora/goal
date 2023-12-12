/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

const styles = ({
    wrap:css({
        display:"block",
        marginTop:"35px",
        width:"100%",
        height:"42px",
    }),
    label:css({
        color:"white",
        fontFamily:"Sans-serif",
        fontSize:"12px",
    }),
    inputicon:css({
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
    inputwrap:css({
        width:"100%",
        height:"100%",
        display:"flex",
        background:"#2f4553",
        margin:"auto",
        "> input":{
            width:"85%",
            height:"97%",
            color:"white",
           background:"#0f212e",
            border:"none",
            borderRadius:"3px"
        },
    }),
    iconouterwrap:css({
        display:"flex",
        height:"100%",
        width:"15%",
       background:"#0f212e",
      
    }),
    iconinnerwrap:css({
        margin:"auto",
    }),
    icon:css({
        width:"100%",
        height:"100%",
        color:"white",
        fontFamily:"Sans-serif",
        fontSize:"10px",
    }),
})
export const StopOnLoss = () =>{
    return(
        <div css={styles.wrap}>
            <span css={styles.label}>Stop On Loss</span>
            <div css={styles.inputicon}>
                <div css={styles.container}>
                    <div css={styles.inputwrap}>
                        <input type="number" value={0} />
                        <div css={styles.iconouterwrap}>
                            <div css={styles.iconinnerwrap}>
                                <span css={styles.icon}>KES</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}