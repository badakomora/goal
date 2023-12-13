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
import { StopOnProfit } from "./StopOnProfit"
import { StopOnLoss } from "./StopOnLoss"
import { AutoBetButton } from "./AutoBetButton"

const styles = ({
    wrap:css({
        height:"100%",
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
export const GameSidebar = () =>{
    const [toggleTabClass, setToggleTabClass] = useState(1) 
    return(
        <div css={styles.wrap}>
            <div css={styles.manualTab}>
                <Tabs tab={toggleTabClass} setTab={setToggleTabClass} />
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
                  <StopOnProfit />
                  <StopOnLoss />
                  <AutoBetButton />
            </div>
            )}
        </div>

    )
}