import React from "react";

function Banner({ status, answer, numguesses, newGameFn }) {
  const victoryMessage = (
    <>
      <strong>Congratulations!</strong> You got it in{" "}
      <strong>{numguesses} guesses</strong>.
    </>
  );

  const defeatMessage = (
    <>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </>
  );

  return (
    <div className={`${status} banner`}>
      {status === "happy" ? victoryMessage : defeatMessage}
      <br />
      <button onClick={() => newGameFn()}>Restart game</button>
    </div>
  );
}

export default Banner;
