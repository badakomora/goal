/** @jsxImportSource @emotion/react */
import { SerializedStyles} from "@emotion/react"

interface betsNumberProps{
    label:string,
    cssStyles:SerializedStyles,
    icon:string,
}
export const BetsNumber:React.FC<betsNumberProps> = ({label, cssStyles, icon}) =>{
    return(
        <div css={cssStyles}>
            <label>{label}</label>
            <div>
                <div>
                    <div >
                        <input type="number" value={0} />
                        <div>
                            <div>
                                <span>{icon}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}