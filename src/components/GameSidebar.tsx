/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { SidebarTabs } from "./SidebarTabs";
import { BetInput } from "./BetInput";
import { MinesInput } from "./MinesInput";
import { BetButton } from "./BetButton";
import { FancyComp } from "./FancyComp";
import { OnWinLoss } from "./OnWinLoss";
import { Gems } from "./Gems";
import { RandomPick } from "./RandomPick";

const styles = {
  wrap: css({
    height: "100%",
    width: "95%",
    margin: "auto",
    display: "block",
  }),
  manualTab: css({
    display: "block",
  }),
  autoTab: css({
    display: "none",
  }),
  flex: css({
    display:"flex",
    width:"100%"
  })
};


interface gamesidebarProps{
  gem:number,
  setGem:React.Dispatch<React.SetStateAction<number>>,
  mine:number,
  setMine:React.Dispatch<React.SetStateAction<number>>
}

export const GameSidebar:React.FC<gamesidebarProps> = ({gem, mine, setGem, setMine}) => {

  const [toggleTabClass, setToggleTabClass] = useState(1);
  const [toggleBetButton, setToggleBetButton] = useState(false)


  
  return (
    <div css={styles.wrap}>

      <div css={styles.manualTab}>
        <SidebarTabs tab={toggleTabClass} setTab={setToggleTabClass} toggleBetButton={toggleBetButton} />
        <BetInput toggleBetButton={toggleBetButton} />
        <div css={toggleBetButton === true ? styles.flex : styles.manualTab}>
          <MinesInput mine={mine} setMine={setMine} toggleBetButton={toggleBetButton} />
          <div css={toggleBetButton === true ? styles.flex : styles.autoTab}>
            <Gems gem={gem} setGem={setGem} toggleBetButton={toggleBetButton} />
          </div>
        </div>
      </div>

      {toggleTabClass === 1 ? (
        <div css={styles.manualTab}>
          {toggleBetButton === false ? (
            <BetButton label={"Bet"} databetbutton={1} togglebetButton={toggleBetButton} setToggleBetButton={setToggleBetButton} />
          ):(
            <>
              <FancyComp label={"Total Profit (1.00x)"} icon={"KES"} toggleBetButton={toggleBetButton} />
              <RandomPick />
              <BetButton label={"Cahout"} databetbutton={2} togglebetButton={toggleBetButton} setToggleBetButton={setToggleBetButton} />
            </>
          )}
        </div>
      ) : (
        <div className="autoTab">
          <FancyComp label={"Number Of Bets"} icon={"\u221E"} toggleBetButton={toggleBetButton} />
          <OnWinLoss label={"On Win"} />
          <OnWinLoss label={"On Loss"} />
          <FancyComp label={"Stop On Profit"}  icon={"KES"} toggleBetButton={toggleBetButton} />
          <FancyComp label={"Stop On Loss"} icon={"KES"}  toggleBetButton={toggleBetButton} />
          <BetButton label={"Start AutoBet"} databetbutton={3} togglebetButton={toggleBetButton} setToggleBetButton={setToggleBetButton}/>
        </div>
      )}
      
    </div>
  );
};
