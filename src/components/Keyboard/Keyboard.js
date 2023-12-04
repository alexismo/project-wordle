import React from "react";
import KeyboardKey from "../KeyboardKey/KeyboardKey";

const keys = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
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

  console.log(allGuesses);

  return (
    <div className="keyboard">
      {keys.map((row, i) => (
        <div className="row" key={`row${i}`}>
          {row.map((k) => (
            //evaluate whether the current letter exists in the allGuesses array
            <KeyboardKey letter={k} status={allGuesses.find} key={k} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
