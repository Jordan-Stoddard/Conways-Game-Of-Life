import React from "react";

export default function RulesContainer() {
  return (
    <div className="rules_container">
      <h1>Rules of the Game:</h1>
      <ul>
        <li>
          If a cell is <span>alive</span> and it has exactly 2 or 3 live
          neighbors, it stays alive.
        </li>
        <li>
          {" "}
          If a cell is <span>alive</span> and it has less than 2 or 4+ live
          neighbors, it dies.
        </li>
        <li>
          If a cell is <span>dead</span> and it has exactly 3 live
          neighbors, it <span>comes to life.</span>
        </li>
      </ul>
    </div>
  );
}
