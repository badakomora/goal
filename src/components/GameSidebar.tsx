/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SidebarTabs } from "./SidebarTabs";
import { BetInput } from "./BetInput";
import { MinesInput } from "./MinesInput";
import { BetButton } from "./BetButton";
import { useState } from "react";
import { BetsNumber } from "./BetsNumber";
import { OnWin } from "./OnWin";
import { OnLoss } from "./OnLoss";
import { StopOnProfit } from "./StopOnProfit";
import { StopOnLoss } from "./StopOnLoss";

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
  manualbetbutton: css({
    width: "100%",
    height: "45px",
    marginTop: "35px",
    "> button": {
      width: "100%",
      height: "100%",
      backgroundColor: "#00e701",
      borderRadius: "5px",
      border: "none",
      "&:hover": {
        backgroundColor: "#1fff20",
      }
    }
  }),
  autobetbutton: css({
    width: "100%",
    height: "45px",
    marginTop: "35px",
      "> button": {
        width: "100%",
        height: "100%",
        backgroundColor: "#00b801",
        borderRadius: "5px",
        border: "none",
        "&:hover": {
          backgroundColor: "#00b801",
        },
    },
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
          <BetButton label={"Bet"} manualbetstyles={styles.manualbetbutton} />
        </div>
      ) : (
        <div className="autoTab">
          <BetsNumber />
          <OnWin />
          <OnLoss />
          <StopOnProfit />
          <StopOnLoss />
          <BetButton label={"Start AutoBet"} autobetstyles={styles.autobetbutton} />
        </div>
      )}
    </div>
  );
};
