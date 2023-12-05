/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

export const MinesInput = () =>{
    const minesinput = ({
        minesinput:css({
            width:"100%",
            height:"38px",
            marginTop:"10px",
            
        }),
        input:css({
            width:"100%",
            height:"100%",
            background:"#0f212e",
            border:"#2f4553 2px solid",
        }),
        label:css({
            color:"white",
            fontFamily:"Sans-serif",
            fontSize:"13px",
        })
    })
    return(
        <div css={minesinput.minesinput}>
            <span css={minesinput.label}>Mines</span>
                <select css={minesinput.input} >
                    <option value=""></option>
                </select>
        </div>
    )
}