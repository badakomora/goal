/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { Tabs } from "./Tabs"
import { BetInput } from "./BetInput"
import { MinesInput } from "./MinesInput"
import { BetButton } from "./BetButton"

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
    return(
        <div css={tabs.wrap}>
            <div css={tabs.manualTab}>
                <Tabs />
                <BetInput />
                <MinesInput />
                <BetButton />
            </div>
            <div className="autoTab">
               
            </div>
        </div>
    )
}