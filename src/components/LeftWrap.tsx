/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { Tabs } from "./Tabs"
import { BetInput } from "./BetInput"
import { MinesInput } from "./MinesInput"
import { BetButton } from "./BetButton"
import { useState } from "react"
import { BetsNumber } from "./BetsNumber"
//tod:rename css object to styles
const tabs = ({
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
        <div css={tabs.wrap}>
            <div css={tabs.manualTab}>
                <Tabs toggleTabClass={toggleTabClass} setToggleTabClass={setToggleTabClass} />
                <BetInput />
                <MinesInput />
            </div>
            {toggleTabClass === 1 ? (
            <div css={tabs.manualTab}>
                <BetButton />
            </div>
            ) : (
            <div className="autoTab">
                  <BetsNumber/>
            </div>
            )}
</div>

    )
}