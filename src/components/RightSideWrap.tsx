/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
const styles = ({
    wrap:css({
        width:"95%",
        height:"95%",
        margin:"auto",
    }),
    tilewrap:css({
        display:"flex",
        justifyContent:"space-around",
        margin:"auto",
        flexWrap:"wrap",
        height:"93%",
        width:"90%",
    }),
    tile:css({
        borderRadius:"5px",
        background: "#2f4553",
        border:"none",
        width:"109.77px",
        height:"109.78px",
        boxShadow: "0 3px 2px rgba(0,0,0,.1)"
    })
})
export const RightSideWrap = () =>{
    return(
        <div css={styles.wrap}>
            <div css={styles.tilewrap}>
                <button css={styles.tile}></button>
                <button css={styles.tile}></button>
                <button css={styles.tile}></button>
                <button css={styles.tile}></button>
                <button css={styles.tile}></button>
                <button css={styles.tile}></button>
                <button css={styles.tile}></button>
                <button css={styles.tile}></button>
                <button css={styles.tile}></button>
                <button css={styles.tile}></button>
                <button css={styles.tile}></button>
                <button css={styles.tile}></button>
                <button css={styles.tile}></button>
                <button css={styles.tile}></button>
                <button css={styles.tile}></button>
                <button css={styles.tile}></button>
                <button css={styles.tile}></button>
                <button css={styles.tile}></button>
                <button css={styles.tile}></button>
                <button css={styles.tile}></button>
                <button css={styles.tile}></button>
                <button css={styles.tile}></button>
                <button css={styles.tile}></button>
                <button css={styles.tile}></button>
                <button css={styles.tile}></button>
            </div>
        </div>
    )
} 