/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
export const Tabs = () =>{
    const tabs = ({
        tabs:css({
            height:"10%",
            width:"100%",
        }),
        wrap:css({
            background:"#0f212e",
            width:"100%",
            height:"45px",
            display: "flex",
            justifyContent:"center",
            borderRadius:" 3rem",
            
        }),
        manualTab: css({
            width: "47%",
            height:"40px",
            background: "#2f4553",
            borderRadius: "4.5rem",
            border:"none",
            margin:"auto",
            color:"white"
        }),
        autoTab: css({
            width: "50%",
            borderRadius: "4.5rem",
            background:"transparent",
            border:"none",
            margin:"auto",
            color:"white",
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