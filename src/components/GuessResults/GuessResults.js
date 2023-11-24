import React from "react";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessResults({ results }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((n) => (
        <Guess
          key={crypto.randomUUID()}
          word={results[n] !== undefined ? results[n] : ""}
        />
      ))}
    </div>
  );
}

export default GuessResults;
