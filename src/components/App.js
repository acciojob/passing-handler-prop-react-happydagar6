import React, { useState } from "react";
import "../styles/App.css" // Ensure CSS path is correct based on your repo
import Selection from "./Selection";
import ColourSelector from "./ColourSelector";

const colorConfig = [
  { key: 'blue', label: 'Blue', background: 'rgb(34, 193, 195)' },
  { key: 'orange', label: 'Orange', background: 'rgb(221, 112, 18)' },
  { key: 'green', label: 'Green', background: 'rgb(44, 209, 88)' }
];

const App = () => {
  // Global state to hold the currently selected color from the buttons
  const [nextBackground, selectNextBackground] = useState({ background: "" });

  return (
    <div id="master">
      <h5 className="heading">Select the gradient and then the Box to change the color</h5>
      
      <div className="row">
        {/* Render color buttons and pass the state-updating function as a prop */}
        {colorConfig.map((config) => (
          <ColourSelector 
            key={config.key} 
            config={config} 
            selectNextBackground={selectNextBackground} 
          />
        ))}
      </div>

      <div className='row' id="children-wrapper">
        {/* Render 3 selection boxes and pass the currently selected color */}
        <Selection applyColor={nextBackground} />
        <Selection applyColor={nextBackground} />
        <Selection applyColor={nextBackground} />
      </div>
    </div>
  );
};

export default App;