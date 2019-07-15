import React from "react";

export default function Grid({ grid, toggleLife }) {
  return (
    <div className="grid">
      {grid.map(cell => {
        return (
          <div
            key={cell.id}
            className={cell.alive ? "alive" : "dead"}
            onClick={toggleLife}
            data-id={cell.id}
            data-column={cell.column}
            data-row={cell.row}
          />
        );
      })}
    </div>

    
  );
}
