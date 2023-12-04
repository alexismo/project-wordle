import React from "react";

function KeyboardKey({ letter, status }) {
  return <div className={`key ${status}`}>{letter}</div>;
}

export default KeyboardKey;
