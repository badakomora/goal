/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { Tabs } from "./Tabs"
import { BetInput } from "./BetInput"
import { MinesInput } from "./MinesInput"
import { BetButton } from "./BetButton"
import { useState } from "react"
import { BetsNumber } from "./BetsNumber"
import { OnWin } from "./OnWin"
import { OnLoss } from "./OnLoss"

const styles = ({
    wrap:css({
        height:"95%",
        width:"95%",
        margin:"auto",
        display:"block"
    }),
    manualTab:css({
        display:"block"
    }),
    autoTab:css({
        display:"none"
    })
})
export const LeftWrap = () =>{
    const [toggleTabClass, setToggleTabClass] = useState(1) 
    return(
        <div css={styles.wrap}>
            <div css={styles.manualTab}>
                <Tabs toggleTabClass={toggleTabClass} setToggleTabClass={setToggleTabClass} />
                <BetInput />
                <MinesInput />
            </div>
            {toggleTabClass === 1 ? (
            <div css={styles.manualTab}>
                <BetButton />
            </div>
            ) : (
            <div className="autoTab">
                  <BetsNumber/>
                  <OnWin />
                  <OnLoss />
            </div>
            )}
</div>

    )
}