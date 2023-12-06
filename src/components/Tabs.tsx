/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useState } from "react"
export const Tabs = () =>{
    //todo:rename and all css outside the component

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
            fontSize:"12px",
            fontFamily:"Sans-serif",
        }),
        autoTab: css({
            width: "46%",
            borderRadius: "4.5rem",
            background:"transparent",
            border:"none",
            margin:"auto",
            color:"white",
            fontSize:"12px",
            fontFamily:"Sans-serif",
            "&:hover": {
                backgroundColor: "#2f4553",
                width: "46%",
                height:"80%",
                borderRadius: "4.5rem",
                border:"none",
                margin:"auto",
                color:"white",
                fontSize:"12px",
                fontFamily:"Sans-serif",
              },
        }),
    })

    const [toggleTabClass, setToggleTabClass] = useState(1) 

    const toggleTabs = (index: number) =>{
        setToggleTabClass(index)
    }
    return(
        <div css={tabs.tabs}>
            <div css={tabs.wrap}>
                <button css={toggleTabClass === 1 ? tabs.manualTab : tabs.autoTab} onClick={() => toggleTabs(1)}>Manual</button>
                <button css={toggleTabClass === 2 ? tabs.manualTab : tabs.autoTab} onClick={() => toggleTabs(2)}>Auto</button>
            </div>
        </div>
    )
}