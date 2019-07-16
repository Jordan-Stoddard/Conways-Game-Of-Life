import React from "react";


export default function Grid({ grid, toggleLife, clickable }) {

  
  return (
    <div className="grid">
      {grid.map((cell, i) => {
        return (
          <div
            key={cell.id}
            className={cell.alive ? "alive" : "dead"}
            onClick={clickable ? toggleLife : null}
            data-id={cell.id}
            data-column={cell.column}
            data-row={cell.row}
          />
        );
      })}
    </div>
  );
}
