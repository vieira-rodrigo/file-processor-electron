import React from "react";
import { Amount, PillDiv, Word } from "./Styled";

export default function Pill({ word, amount }) {
  const round = (value) => {
    if (value < 1000) return value;
    const rounded = (amount / 1000).toFixed(1);
    return `${rounded}k`;
  };

  return (
    <PillDiv>
      <Word>{word}</Word>
      <Amount>{round(amount)}</Amount>
    </PillDiv>
  );
}
