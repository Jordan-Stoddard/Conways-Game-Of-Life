import React, { useState } from "react";
import { defaultGrid } from "../dummy-data-structures/default-grid";
import Grid from "./Grid";
import defaultGridsContainer from "./DefaultGridsContainer";
import DefaultGridsContainer from "./DefaultGridsContainer";

export default function GridContainer() {
  const [grid, setGrid] = useState(defaultGrid);

  const toggleLife = e => {
    const column = e.target.dataset.column;
    const row = e.target.dataset.row;
    const id = e.target.dataset.id;
    const newGrid = grid.map(cell => {
      if (cell.id === +id) {
        return {
          column: +column,
          row: +row,
          alive: !cell.alive,
          clickable: true,
          id: +id
        };
      } else {
        return cell;
      }
    });

    setGrid(newGrid);
  };

  return (
    <div className="grid_container">
      <Grid grid={grid} setGrid={setGrid} toggleLife={toggleLife} />
      <DefaultGridsContainer />
    </div>
  );
}
