/** @jsxImportSource @emotion/react */
import { SerializedStyles } from "@emotion/react";

interface betButtonProps{
  label:string,
  manualbetstyles?:SerializedStyles,
  autobetstyles?:SerializedStyles,
}

export const BetButton:React.FC<betButtonProps> = ({label, manualbetstyles, autobetstyles}) => {
  return (
    <div css={[manualbetstyles, autobetstyles]}>
      <button>{label}</button>
    </div>
  );
};
