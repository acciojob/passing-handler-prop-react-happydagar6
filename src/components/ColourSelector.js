import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;
  const { background, label, key } = config;
  
  return (
    <button 
      data-testid={key}
      style={{ backgroundColor: background }} 
      onClick={() => selectNextBackground({ background: background })}
    >
      {label}
    </button>
  );
};

export default ColourSelector;