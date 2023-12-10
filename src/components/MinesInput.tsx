/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

const styles = ({
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
        marginTop:"4px",

        "> option":{
            width:"100%",
            height:"100%",
            color:"white",
            backgroundColor:"#0f212e",
        },
    }),
    label:css({
        color:"white",
        fontFamily:"Sans-serif",
        fontSize:"12px",
    }),

})
export const MinesInput = () =>{
   
    
    return(
        <div css={styles.minesinput}>
                <span css={styles.label}>Mines</span>
                <select css={styles.input} >
                    <option value="" >1</option>
                    <option value="" >2</option>
                    <option value="" >3</option>
                    <option value="" >4</option>
                    <option value="" >5</option>
                    <option value="" >6</option>
                    <option value="" >7</option>
                    <option value="" >8</option>
                    <option value="" >9</option>
                    <option value="" >10</option>
                    <option value="" >11</option>
                    <option value="" >12</option>
                    <option value="" >13</option>
                    <option value="" >14</option>
                    <option value="" >15</option>
                    <option value="" >16</option>
                    <option value="" >17</option>
                    <option value="" >18</option>
                    <option value="" >19</option>
                    <option value="" >20</option>
                    <option value="" >21</option>
                    <option value="" >22</option>
                    <option value="" >23</option>
                    <option value="" >24</option>
                </select>
        </div>
    )
}