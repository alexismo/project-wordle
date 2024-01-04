import React, { useState } from "react";

import { sample } from "../../utils";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";

import Banner from "../Banner";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Keyboard from "../Keyboard/Keyboard";

// Pick a random word on every pageload.
// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [answer, setAnswer] = useState(sample(WORDS));
  const [results, setResults] = useState([]);
  const [gameState, setGameState] = useState("playing"); //playing | happy | sad

  const newGame = () => {
    setAnswer(sample(WORDS));
    setResults([]);
    setGameState("playing");
  };

  const setResult = (r) => {
    const resLen = results.length + 1;
    if (resLen === NUM_OF_GUESSES_ALLOWED) {
      setGameState("sad");
    }
    if (r === answer) {
      setGameState("happy");
    }

    const newResults = [...results, checkGuess(r, answer)];
    setResults(newResults);
  };

  return (
    <>
      <GuessResults results={results} />
      <GuessInput setResult={setResult} gameState={gameState} />
      <Keyboard results={results} />
      {gameState !== "playing" && (
        <Banner
          status={gameState}
          answer={answer}
          numGuesses={results.length}
          newGameFn={newGame}
        />
      )}
    </>
  );
}

export default Game;
