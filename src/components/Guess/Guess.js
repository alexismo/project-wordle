import React from "react";

import { range } from "../../utils";

function Guess({ word }) {
  return (
    <p className="guess">
      {range(0, 5).map((n) => (
        <span
          className={`cell${word[n] !== undefined ? ` ${word[n].status}` : ""}`}
          key={`${word}.${n}`}
        >
          {word[n]?.letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
