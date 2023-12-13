/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { LeftSideWrap } from "./LeftSideWrap"
import { RightSideWrap } from "./RightSideWrap"

const styles = {
    container:css({
        display:"flex",
        justifyContent:"center",
    }),
    gameWrap:css({
        backgroundColor:"#0f212e",
        width:"900px",
        height:"680px",
    }),
    sidesWrap:css({
        display:"flex",
        justifyContent:"space-between",
        width:"100%",
        height:"100%",
    }),
    leftsidewrap:css({
        backgroundColor:"#213743",
        width:"33%",
        display:"flex",
        justifyContent:"center"
    }),
    rightsidewrap:css({
        backgroundColor:"#0f212e",
        width:"67%",
        display:"flex",
        justifyContent:"center"
    })

}
export const Game = () =>{
 return(
    <div css={styles.container}>
        <div css={styles.gameWrap}>
            <div css={styles.sidesWrap}>
                <div css={styles.leftsidewrap}>
                    {/* todo:: name appropriately */}
                    <LeftSideWrap />
                </div>
                <div css={styles.rightsidewrap}>
                     {/* todo:: name appropriately */}
                    <RightSideWrap />
                </div>
            </div>
            <div className="bottomWrap">

            </div>
        </div>
    </div>
 )
}