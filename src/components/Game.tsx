/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { GameSidebar } from "./GameSidebar"
import { GameContent } from "./GameContent"
import { useEffect, useState } from "react"

const styles = {
    wrap:css({
        display:"flex",
        justifyContent:"center",
            "> div":{
                backgroundColor:"#0f212e",
                width:"1000px",
                height:"680px",

                "> div:nth-of-type(1)":{
                    display:"flex",
                    justifyContent:"space-between",
                    width:"100%",
                    height:"100%",

                    "> div:nth-of-type(1)":{
                        backgroundColor:"#213743",
                        width:"30%",
                        display:"flex",
                        justifyContent:"center"
                    },

                    "> div:nth-of-type(2)":{
                        backgroundColor:"#0f212e",
                        width:"70%",
                        display:"flex",
                        justifyContent:"center"
                    }
                },

                
                "> div:nth-of-type(2)":{

                }
            }
    }),
  

}
export const Game = () =>{


    const [mine, setMine] = useState(3)
    const [gem, setGem] = useState(0)
  
    useEffect(()=>{
      const stones = 25;
      const newGem = stones - mine
      setGem(newGem)
    }, [mine])


    
 return(
    <div css={styles.wrap}>
        <div>
            <div>
                <div>
                    <GameSidebar gem={0} setGem={setGem} mine={mine} setMine={setMine} />
                </div>
                <div>
                    <GameContent gem={gem} mine={mine} />
                </div>
            </div>
            <div className="bottomWrap">
              {/* to be continued... */}
            </div>
        </div>
    </div>
 )
}