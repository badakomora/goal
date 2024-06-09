/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { TILES } from "./Tiles";

const styles = {
  wrap: css({
    height: "10%",
    width: "100%",
    marginTop: "10px",
    "> div": {
      background: "#0f212e",
      width: "100%",
      height: "48px",
      display: "flex",
      justifyContent: "center",
      borderRadius: "3rem",
      "> button[data-manualautotabs=manual]": {
        width: "47%",
        height: "40px",
        background: "#2f4553",
        borderRadius: "4.5rem",
        border: "none",
        margin: "auto",
        color: "white",
        fontSize: "12px",
        fontFamily: "Sans-serif",
        "&:hover": {
          backgroundColor: "#2f4553",
          height: "80%",
        },
      },
      "> button[data-manualAutoTabs=auto]": {
        width: "47%",
        borderRadius: "4.5rem",
        background: "transparent",
        border: "none",
        margin: "auto",
        color: "white",
        fontSize: "12px",
        fontFamily: "Sans-serif",
        "&:hover": {
          backgroundColor: "#2f4553",
          height: "80%",
        },
      },
      "> button[data-manualAutoTabs=newauto]": {
        width: "47%",
        borderRadius: "4.5rem",
        background: "transparent",
        border: "none",
        margin: "auto",
        color: "white",
        fontSize: "12px",
        fontFamily: "Sans-serif",
        // "&:hover": {
        //   backgroundColor: "#2f4553",
        //   height: "80%",
        // },
      },
    },
  }),
};

interface TabProps {
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
  toggleBetButton: boolean;
  setToggleBetButton: React.Dispatch<React.SetStateAction<boolean>>;
  setGameOver:React.Dispatch<React.SetStateAction<boolean>>,
  setMineGem:React.Dispatch<React.SetStateAction<boolean[]>>,
}

export const SidebarTabs: React.FC<TabProps> = ({ tab, setTab, toggleBetButton, setMineGem, }) => {
  const toggleTabs = (index: number) => {
    setTab(index);
    setMineGem(Array(TILES.length).fill(false));
  };

 
  const tabs = Array.from({ length: 2 }, (_, index) => index + 1);

  return (
    <div css={styles.wrap}>
      <div>
        {tabs.map((index) => (
          <button
            key={index}
            data-manualautotabs={
              toggleBetButton === false
                ? tab === index
                  ? "manual"
                  : "auto"
                : tab === index
                ? "manual"
                : "newauto"
            }
            disabled={toggleBetButton}
            onClick={() => toggleTabs(index)}
          >
            {index === 1 ? "Manual" : "Auto"}
          </button>
        ))}
      </div>
    </div>
  );
};
