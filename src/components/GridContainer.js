import React, { useState } from "react";
import {
  defaultGrid1,
  defaultGrid2,
  defaultGrid3,
  defaultGrid4
} from "../dummy-data-structures/default-grids";
import Grid from "./Grid";
import DefaultGridsContainer from "./DefaultGridsContainer";
import getNeighbors from "../helper-functions/grid-neighbors";
import Controls from "./Controls";

export default function GridContainer() {
  const [grid, setGrid] = useState(defaultGrid1);
  const [generation, setGeneration] = useState(0);


  const startAutomata = e => {
    e.preventDefault();
    // neighbors[0] = north west neighbor
    // neighbors[1] = north neighbor
    // neighbors[2] = north east neighbor
    // neighbors[3] = west neighbor
    // neighbors[4] = east neighbor
    // neighbors[5] = south west neighbor
    // neighbors[6] = south neighbor
    // neighbors[7] = south east neighbor
    const nextGeneration = grid.map((cell, i) => {
      let neighbors = getNeighbors(i, 15, 15);
      let livingNeighbors = 0;
      if (grid[neighbors[0]].alive) {
        livingNeighbors += 1;
      }
      if (grid[neighbors[1]].alive) {
        livingNeighbors += 1;
      }
      if (grid[neighbors[2]].alive) {
        livingNeighbors += 1;
      }
      if (grid[neighbors[3]].alive) {
        livingNeighbors += 1;
      }
      if (grid[neighbors[4]].alive) {
        livingNeighbors += 1;
      }
      if (grid[neighbors[5]].alive) {
        livingNeighbors += 1;
      }
      if (grid[neighbors[6]].alive) {
        livingNeighbors += 1;
      }
      if (grid[neighbors[7]].alive) {
        livingNeighbors += 1;
      }

      if (cell.alive && (livingNeighbors === 2 || livingNeighbors === 3)) {
        return cell;
      }
      if (cell.alive && (livingNeighbors < 2 || livingNeighbors >= 4)) {
        return { ...cell, alive: !cell.alive };
      }
      if (!cell.alive && livingNeighbors === 3) {
        return { ...cell, alive: !cell.alive };
      }
      return cell;
    });

    setGeneration(prevGeneration => (prevGeneration += 1));
    setGrid(nextGeneration);
  };

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

  const setDefaultGrid = e => {
    e.preventDefault();
    switch (e.target.value) {
      case "Default Grid 1":
        setGrid(defaultGrid1);
        setGeneration(0);
        break;
      case "Default Grid 2":
        setGrid(defaultGrid2);
        setGeneration(0);
        break;
      case "Default Grid 3":
        setGrid(defaultGrid3);
        setGeneration(0);
        break;
      case "Default Grid 4":
        setGrid(defaultGrid4);
        setGeneration(0);
        break;
      default:
        return;
    }
  };

  return (
    <div className="grid_container">
      <h1>Generation: {generation}</h1>
      <div className="grid_and_default_buttons">
        <Grid grid={grid} setGrid={setGrid} toggleLife={toggleLife} />
        <DefaultGridsContainer setDefaultGrid={setDefaultGrid} />
      </div>
      <Controls startAutomata={startAutomata} />
    </div>
  );
}
