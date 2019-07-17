import React, { useState, useEffect, useRef } from "react";
import {
  defaultGrid1,
  defaultGrid2,
  defaultGrid3,
  defaultGrid4
} from "../dummy-data-structures/default-grids";
import getNeighbors from "./grid-neighbors";

export const useInterval = (callback, delay, grid, clickable) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!clickable) {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }
  }, [delay, grid, clickable]);
};

export const useGrid = () => {
  const [grid, setGrid] = useState(defaultGrid1);
  const [generation, setGeneration] = useState(0);
  const [clickable, setClickable] = useState(true);
  const [speedInput, setSpeedInput] = useState("");
  const [gridSize, setGridSize] = useState(15);

  const createRandomGrid = num => {
    let numberOfCells = num * num;
    let randomGrid = [];

    for (let i = 0; i < numberOfCells; i++) {
      randomGrid = [...randomGrid, { alive: Math.round(Math.random()), id: i }];
    }
    setGeneration(0);
    setGrid(randomGrid);
  };

  const stepThroughAutomata = () => {
    let validGrid = false;
    // neighbors[0] = north west neighbor
    // neighbors[1] = north neighbor
    // neighbors[2] = north east neighbor
    // neighbors[3] = west neighbor
    // neighbors[4] = east neighbor
    // neighbors[5] = south west neighbor
    // neighbors[6] = south neighbor
    // neighbors[7] = south east neighbor
    const nextGeneration = grid.map((cell, i) => {
      let neighbors = getNeighbors(i, gridSize, gridSize);
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
        validGrid = true;
        return { ...cell, alive: !cell.alive };
      }
      if (!cell.alive && livingNeighbors === 3) {
        validGrid = true;
        return { ...cell, alive: !cell.alive };
      }
      return cell;
    });

    if (validGrid) {
      setGeneration(prevState => (prevState += 1));
    } else {
      setClickable(true);
      return alert(
        "Grid is invalid, or no changes will be made due to rules. \nToggle some live cells or select a default grid."
      );
    }
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
      case "Clear Grid":
        setGridSize(15);
        setGrid(defaultGrid1);
        setGeneration(0);
        break;
      case "Default Grid 1":
        setGridSize(15);
        setGrid(defaultGrid2);
        setGeneration(0);
        break;
      case "Default Grid 2":
        setGridSize(15);
        setGrid(defaultGrid3);
        setGeneration(0);
        break;
      case "Default Grid 3":
        setGridSize(15);
        setGrid(defaultGrid4);
        setGeneration(0);
        break;
      default:
        return;
    }
  };

  return [
    grid,
    setGrid,
    generation,
    setGeneration,
    clickable,
    setClickable,
    speedInput,
    setSpeedInput,
    stepThroughAutomata,
    toggleLife,
    setDefaultGrid,
    createRandomGrid,
    gridSize,
    setGridSize
  ];
};
