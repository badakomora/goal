/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

export const MinesInput = () =>{
    //tod:rename css object to styles
    //todo:css outside component
    const minesinput = ({
        minesinput:css({
            width:"100%",
            height:"38px",
            marginTop:"9px",
            
        }),
        input:css({
            width:"100%",
            height:"100%",
            color:"white",
            background:"#0f212e",
            border:"#2f4553 2px solid",
        }),
        label:css({
            color:"white",
            fontFamily:"Sans-serif",
            fontSize:"12px",
            marginBottom:"5px"
        }),
        option:css({
            width:"100%",
            height:"100%",
            color:"white",
            backgroundColor:"#0f212e",
        })
    })
    return(
        <div css={minesinput.minesinput}>
                <span css={minesinput.label}>Mines</span>
                <select css={minesinput.input} >
                    <option value="" css={minesinput.option}>1</option>
                    <option value="" css={minesinput.option}>2</option>
                    <option value="" css={minesinput.option}>3</option>
                    <option value="" css={minesinput.option}>4</option>
                    <option value="" css={minesinput.option}>5</option>
                    <option value="" css={minesinput.option}>6</option>
                    <option value="" css={minesinput.option}>7</option>
                    <option value="" css={minesinput.option}>8</option>
                    <option value="" css={minesinput.option}>9</option>
                    <option value="" css={minesinput.option}>10</option>
                    <option value="" css={minesinput.option}>11</option>
                    <option value="" css={minesinput.option}>12</option>
                    <option value="" css={minesinput.option}>13</option>
                    <option value="" css={minesinput.option}>14</option>
                    <option value="" css={minesinput.option}>15</option>
                    <option value="" css={minesinput.option}>16</option>
                    <option value="" css={minesinput.option}>17</option>
                    <option value="" css={minesinput.option}>18</option>
                    <option value="" css={minesinput.option}>19</option>
                    <option value="" css={minesinput.option}>20</option>
                    <option value="" css={minesinput.option}>21</option>
                    <option value="" css={minesinput.option}>22</option>
                    <option value="" css={minesinput.option}>23</option>
                    <option value="" css={minesinput.option}>24</option>
                </select>
        </div>
    )
}