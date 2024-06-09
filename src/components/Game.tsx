/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { GameSidebar } from "./GameSidebar"
import { GameContent } from "./GameContent"
import { useEffect, useState } from "react"
import { TILES } from "./Tiles"

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
                    //to be continued
                }
            }
    }),
}


export const Game = () =>{
    const [minegem, setMineGem] = useState<boolean[]>(Array(TILES.length).fill(false));
    const [toggleTabClass, setToggleTabClass] = useState(1);
    const [toggleBetButton, setToggleBetButton] = useState<boolean>(false)
    const [gameOver, setGameOver] = useState<boolean>(false);
    const [shuffledTiles, setShuffledTiles] = useState<number[]>([]);
    const [clickedButtons, setClickedButtons] = useState<boolean[]>(Array(TILES.length).fill(false));

    const [mine, setMine] = useState(3)
    const [gem, setGem] = useState(0)
  
    useEffect(() => {
      const stones = 25;
      const newGem = stones - mine
      setGem(newGem)
    },[mine])


    
 return(
    <div css={styles.wrap}>
        <div>
            <div>
                <div>
                    <GameSidebar gem={gem} setGem={setGem} mine={mine} setMine={setMine} toggleTabClass={toggleTabClass} setToggleTabClass={setToggleTabClass} toggleBetButton={toggleBetButton} setToggleBetButton={setToggleBetButton} setGameOver={setGameOver} setMineGem={setMineGem} minegem={minegem} shuffledTiles={shuffledTiles} setShuffledTiles={setShuffledTiles} clickedButtons={clickedButtons} setClickedButtons={setClickedButtons} gameOver={gameOver}  />
                </div>
                <div>
                    <GameContent gem={gem} mine={mine} toggleBetButton={toggleBetButton} setToggleBetButton={setToggleBetButton} gameOver={gameOver} setGameOver={setGameOver} minegem={minegem} setMineGem={setMineGem} shuffledTiles={shuffledTiles} setShuffledTiles={setShuffledTiles} clickedButtons={clickedButtons} setClickedButtons={setClickedButtons } />
                </div>
            </div>
            <div className="bottomWrap">
              {/* to be continued... */}
            </div>
        </div>
    </div>
 )

}