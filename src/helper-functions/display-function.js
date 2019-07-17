export const gridDisplay = num => {
  if (num === 15) {
    return {
      display: "grid",
      gridTemplateColumns: `repeat(${num}, 20px)`,
      gridTemplateRows: `repeat(${num}, 20px)`
    };
  }
  if (num === 30) {
    return {
      display: "grid",
      gridTemplateColumns: `repeat(${num}, 10px)`,
      gridTemplateRows: `repeat(${num}, 10px)`
    };
  }
  if (num === 50) {
    return {
      display: "grid",
      gridTemplateColumns: `repeat(${num}, 6px)`,
      gridTemplateRows: `repeat(${num}, 6px)`
    };
  }
};

const cellSize = gridSize => {
    if (gridSize === 15) {
        return '20px'
    }
    if (gridSize === 30) {
        return '10px'
    }
    if (gridSize === 50) {
        return '6px'
    }
}


export const cellDisplay = (alive, gridSize) => {
    const ranColorNum1 = Math.floor(Math.random() * Math.floor(255))
    const ranColorNum2 = Math.floor(Math.random() * Math.floor(255))
    const ranColorNum3 = Math.floor(Math.random() * Math.floor(255))

  if (alive) {
    return {
      width: `${cellSize(gridSize)}`,
      height: `${cellSize(gridSize)}`,
      background: `rgb(${ranColorNum1}, ${ranColorNum2}, ${ranColorNum3})`,
    
    
    };
  } else {
    return {
        width: `${cellSize(gridSize)}`,
        height: `${cellSize(gridSize)}`,
        background: "black",
        // border: '0.1px solid black'
      };
  }
};


