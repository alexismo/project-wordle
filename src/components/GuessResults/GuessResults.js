import React from "react";

function GuessResults({ results }) {
  return (
    <div className="guess-results">
      {results.map((r) => (
        <p className="guess" key={crypto.randomUUID()}>
          {r}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
