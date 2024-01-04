import React, { useState } from "react";

function GuessInput({ setResult, gameState }) {
  const [guess, setGuess] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setResult(guess);
    setGuess("");
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        pattern="[A-Za-z]{5}"
        title="5 letter word"
        id="guess-input"
        type="text"
        autoComplete="off"
        value={guess}
        onChange={(e) => {
          const nextGuess = e.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
        disabled={gameState !== "playing"}
      />
    </form>
  );
}

export default GuessInput;
