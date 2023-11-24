import React, { useState } from "react";

import { sample } from "../../utils";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";

import Banner from "../Banner";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [results, setResults] = useState([]);
  const [gameState, setGameState] = useState("playing"); //playing | happy | sad
  const setResult = (r) => {
    const resLen = results.length + 1;
    if (resLen === NUM_OF_GUESSES_ALLOWED) {
      setGameState("sad");
    }
    if (r === answer) {
      setGameState("happy");
    }
    setResults([...results, checkGuess(r, answer)]);
  };
  return (
    <>
      <GuessResults results={results} />
      <GuessInput setResult={setResult} gameState={gameState} />
      {gameState !== "playing" && (
        <Banner
          status={gameState}
          answer={answer}
          numguesses={results.length}
        />
      )}
    </>
  );
}

export default Game;
