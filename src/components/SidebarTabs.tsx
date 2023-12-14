/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const styles = {
  tabs: css({
    height: "10%",
    width: "100%",
    marginTop: "10px"
  }),
  wrap: css({
    background: "#0f212e",
    width: "100%",
    height: "48px",
    display: "flex",
    justifyContent: "center",
    borderRadius: " 3rem"
  }),
  manualTab: css({
    width: "47%",
    height: "40px",
    background: "#2f4553",
    borderRadius: "4.5rem",
    border: "none",
    margin: "auto",
    color: "white",
    fontSize: "12px",
    fontFamily: "Sans-serif"
  }),
  autoTab: css({
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
      width: "47%",
      height: "80%",
      borderRadius: "4.5rem",
      border: "none",
      margin: "auto",
      color: "white",
      fontSize: "12px",
      fontFamily: "Sans-serif"
    }
  })
};

interface TabProps {
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
}
export const SidebarTabs: React.FC<TabProps> = ({tab: toggleTabClass, setTab: setToggleTabClass}) => {

  const toggleTabs = (index: number) => {
    setToggleTabClass(index);
  };

  // const buttons = [
  //   {
  //   id:1,
  //   label:"Manual",
  //   css:toggleTabClass === 1 ? styles.manualTab : styles.autoTab,
  //   onclick:() => toggleTabs(1),
  //   },
  //   {
  //     id:2,
  //     label:"Auto",
  //     css:toggleTabClass === 2 ? styles.manualTab : styles.autoTab,
  //     onclick:() => toggleTabs(2),
  //   },
  // ]

  const buttons = Array.from({length:2}, (_, index) => index + 1)
  return (
    <div css={styles.tabs}>
      <div css={styles.wrap}>
      {buttons.map((button) => (
        <button key={button} css={toggleTabClass === button ? styles.manualTab : styles.autoTab} onClick={() => toggleTabs(button)}>
          {button === 1 ? "Manual" : "Auto"}
        </button>
      ))}
      </div>
    </div>
  );
};
