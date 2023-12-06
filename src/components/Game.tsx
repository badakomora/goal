/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { LeftWrap } from "./LeftWrap"

//tod:rename css object to styles
const gameStyle = {
    container:css({
        display:"flex",
        justifyContent:"center"
    }),
    gameWrap:css({
        backgroundColor:"#0f212e",
        width:"900px",
        height:"550px",
    }),
    sidesWrap:css({
        display:"flex",
        justifyContent:"space-between",
        width:"100%",
        height:"100%",
    }),
    leftWrap:css({
        backgroundColor:"#213743",
        width:"33%",
        display:"flex",
        justifyContent:"center"
    }),

}
export const Game = () =>{
 return(
    <div css={gameStyle.container}>
        <div css={gameStyle.gameWrap}>
            <div css={gameStyle.sidesWrap}>
                <div css={gameStyle.leftWrap}>
                    <LeftWrap />
                </div>
                <div className="rightWrap">

                </div>
            </div>
            <div className="bottomWrap">

            </div>
        </div>
    </div>
 )
}