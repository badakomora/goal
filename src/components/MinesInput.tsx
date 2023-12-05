/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

export const MinesInput = () =>{
    const minesinput = ({
        minesinput:css({
            width:"100%",
            height:"35px",
            marginTop:"10px"
        }),
        input:css({
            width:"100%",
            height:"100%"
        })
    })
    return(
        <div css={minesinput.minesinput}>
                <select css={minesinput.input} >
                    <option value="">1</option>
                    <option value="">2</option>
                </select>
        </div>
    )
}