/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SidebarTabs } from "./SidebarTabs";
import { BetInput } from "./BetInput";
import { MinesInput } from "./MinesInput";
import { BetButton } from "./BetButton";
import { useState } from "react";
import { FancyComp } from "./FancyComp";
import { OnWinLoss } from "./OnWinLoss";

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
export const GameSidebar = () => {
  const [toggleTabClass, setToggleTabClass] = useState(1);
  const [toggleBetButton, setToggleBetButton] = useState(false)
  
  return (
    <div css={styles.wrap}>
      <div css={styles.manualTab}>
        <SidebarTabs tab={toggleTabClass} setTab={setToggleTabClass} />
        <BetInput />
        <div css={toggleBetButton === true ? styles.flex : styles.manualTab}>
          <MinesInput />
          <div css={toggleBetButton === true ? styles.flex : styles.autoTab}>
            <MinesInput />
          </div>
        </div>
       
      </div>
      {toggleTabClass === 1 ? (
        <div css={styles.manualTab}>
          {toggleBetButton === false ? (
            <BetButton label={"Bet"} databetbutton={1} togglebetButton={toggleBetButton} setToggleBetButton={setToggleBetButton} />
          ):(
            <>
              <FancyComp label={"Total Profit (1.00x)"} icon={"KES"} />
              <BetButton label={"Cahout"} databetbutton={2} togglebetButton={toggleBetButton} setToggleBetButton={setToggleBetButton} />
            </>
          )}
        </div>
      ) : (
        <div className="autoTab">
          <FancyComp label={"Number Of Bets"} icon={"\u221E"} />
          <OnWinLoss label={"On Win"} />
          <OnWinLoss label={"On Loss"} />
          <FancyComp label={"Stop On Profit"}  icon={"KES"} />
          <FancyComp label={"Stop On Loss"} icon={"KES"} />
          <BetButton label={"Start AutoBet"} databetbutton={3} togglebetButton={toggleBetButton} setToggleBetButton={setToggleBetButton}/>
        </div>
      )}
    </div>
  );
};
