import React from "react";

export default function DefaultGridsContainer({ setDefaultGrid }) {
  return (
    <div className="default_grids_container">
      <button value="Default Grid 1" onClick={setDefaultGrid}>
        Default Grid 1
      </button>
      <button value="Default Grid 2" onClick={setDefaultGrid}>
        Default Grid 2
      </button>
      <button value="Default Grid 3" onClick={setDefaultGrid}>
        Default Grid 3
      </button>
      <button value="Default Grid 4" onClick={setDefaultGrid}>
        Default Grid 4
      </button>
    </div>
  );
}
