import React, { useState } from "react";

function GuessInput({ setResult, gameState }) {
  const [guess, setGuess] = useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();

        setResult(guess.toUpperCase());
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        autoComplete="off"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        disabled={gameState !== "playing"}
      />
    </form>
  );
}

export default GuessInput;
