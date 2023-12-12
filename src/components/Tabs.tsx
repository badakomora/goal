/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

const styles = ({
    tabs:css({
        height:"10%",
        width:"100%",
        marginTop:"10px",
    }),
    wrap:css({
        background:"#0f212e",
        width:"100%",
        height:"48px",
        display: "flex",
        justifyContent:"center",
        borderRadius:" 3rem",
        
    }),
    manualTab: css({
        width: "48%",
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
        width: "48%",
        borderRadius: "4.5rem",
        background:"transparent",
        border:"none",
        margin:"auto",
        color:"white",
        fontSize:"12px",
        fontFamily:"Sans-serif",
        "&:hover": {
            backgroundColor: "#2f4553",
            width: "48%",
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

interface toggleManualAutoTabs{
    toggleTabClass:number,
    setToggleTabClass:React.Dispatch<React.SetStateAction<number>>
}
export const Tabs:React.FC<toggleManualAutoTabs> = ({toggleTabClass, setToggleTabClass}) =>{

    const toggleTabs = (index: number) =>{
        setToggleTabClass(index)
    }
    
    return(
        <div css={styles.tabs}>
            <div css={styles.wrap}>
                <button css={toggleTabClass === 1 ? styles.manualTab : styles.autoTab} onClick={() => toggleTabs(1)}>Manual</button>
                <button css={toggleTabClass === 2 ? styles.manualTab : styles.autoTab} onClick={() => toggleTabs(2)}>Auto</button>
            </div>
        </div>
    )
}