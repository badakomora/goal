/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SidebarTabs } from "./SidebarTabs";
import { BetInput } from "./BetInput";
import { MinesInput } from "./MinesInput";
import { BetButton } from "./BetButton";
import { useState } from "react";
import { FancyComp } from "./FancyComp";
// import { OnWin } from "./OnWin";
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
};
export const GameSidebar = () => {
  const [toggleTabClass, setToggleTabClass] = useState(1);
 
  
  return (
    <div css={styles.wrap}>
      <div css={styles.manualTab}>
        <SidebarTabs tab={toggleTabClass} setTab={setToggleTabClass} />
        <BetInput />
        <MinesInput />
      </div>
      {toggleTabClass === 1 ? (
        <div css={styles.manualTab}>
          <BetButton label={"Bet"} databetbutton={1} />
        </div>
      ) : (
        <div className="autoTab">
          <FancyComp label={"Number Of Bets"} icon={"\u221E"} />
          <OnWinLoss label={"On Win"} />
          <OnWinLoss label={"On Loss"} />
          <FancyComp label={"Stop On Profit"}  icon={"KES"} />
          <FancyComp label={"Stop On Loss"} icon={"KES"} />
          <BetButton label={"Start AutoBet"} databetbutton={2} />
        </div>
      )}
    </div>
  );
};
