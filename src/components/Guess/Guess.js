import React from "react";

import { range } from "../../utils";

function Guess({ value }) {
  return (
    <div>
      <p className="guess">
        {range(5).map((num) => (
          <span kay={num} className="cell">
            {value ? value[num] : undefined}
          </span>
        ))}
        {/* <span className="cell">H</span>
        <span className="cell">E</span>
        <span className="cell">L</span>
        <span className="cell">L</span>
        <span className="cell">O</span> */}
      </p>
    </div>
  );
}

export default Guess;
