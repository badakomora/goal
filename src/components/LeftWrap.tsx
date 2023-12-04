/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { Tabs } from "./Tabs"
import { BetInput } from "./BetInput"

const tabs = ({
    wrap:css({
        height:"95%",
        width:"95%",
        margin:"auto",
        display:"block"
    })
})
export const LeftWrap = () =>{
    return(
        <div css={tabs.wrap}>
            <Tabs />
            <BetInput />
        </div>
    )
}