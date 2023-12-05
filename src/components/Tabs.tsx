/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
export const Tabs = () =>{
    const tabs = ({
        tabs:css({
            height:"10%",
            width:"100%",
            marginTop:"10px",
        }),
        wrap:css({
            background:"#0f212e",
            width:"100%",
            height:"50px",
            display: "flex",
            justifyContent:"center",
            borderRadius:" 3rem",
            
        }),
        manualTab: css({
            width: "46%",
            height:"40px",
            background: "#2f4553",
            borderRadius: "4.5rem",
            border:"none",
            margin:"auto",
            color:"white",
            fontFamily:"Sans-serif",
        }),
        autoTab: css({
            width: "46%",
            borderRadius: "4.5rem",
            background:"transparent",
            border:"none",
            margin:"auto",
            color:"white",
            fontFamily:"Sans-serif",
        }),
    })
    return(
        <div css={tabs.tabs}>
            <div css={tabs.wrap}>
                <button css={tabs.manualTab}>Manual</button>
                <button css={tabs.autoTab}>Auto</button>
            </div>
        </div>
    )
}