import React from "react";

export default function Controls({ startAutomata }) {
  return (
    <div className="controls">
      <button onClick={startAutomata}>Play</button>
      <button>Stop</button>
    </div>
  );
}
