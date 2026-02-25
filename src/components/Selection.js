import React, { useState } from "react";

const Selection = ({ applyColor }) => {
  // Local state to manage the background color of this box
  const [style, setStyle] = useState({ background: "" });

  return (
    // ClassName 'fix-box' as required in the problem statement
    <div className="fix-box" style={style} onClick={() => setStyle(applyColor)}>
      <h2 className="subheading">Selection</h2>
    </div>
  );
};

export default Selection;
