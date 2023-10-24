import React, { useState } from "react";

function GuessInput({ setResult }) {
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
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
    </form>
  );
}

export default GuessInput;
