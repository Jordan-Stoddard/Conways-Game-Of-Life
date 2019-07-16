import React from "react";

export default function Controls({ stepThroughAutomata, setClickable, clickable }) {
  return (
    <div className="controls">
      <button
        onClick={e => {
          e.preventDefault();
          stepThroughAutomata();
        }}
      >
        Step 1 Generation
      </button>
      <button onClick={() => setClickable(prevState => !prevState)}>
        {clickable ? 'Start' : 'Stop'}
      </button>
    </div>
  );
}
