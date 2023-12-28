import React from "react";
import KeyboardKey from "../KeyboardKey/KeyboardKey";

const keys = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function Keyboard({ results }) {
  //convert the allGuesses object where there are 2 keys, letter and status to a single object where the key is the letter and the value is the status

  const allGuesses = results
    .reduce((acc, curr) => [...acc, ...curr], [])
    .reduce((acc, curr) => {
      const { letter, status } = curr;
      acc[letter] = status;
      return acc;
    }, {});

  return (
    <div className="keyboard">
      {keys.map((row, i) => (
        <div className="row" key={`row${i}`}>
          {row.map((k) => (
            //evaluate whether the current letter exists in the allGuesses array
            <KeyboardKey
              letter={k}
              status={allGuesses[k] ? allGuesses[k] : ""}
              key={k}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
