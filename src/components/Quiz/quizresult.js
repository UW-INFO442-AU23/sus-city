import React from 'react';

const Results = ({ selectedOptions }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Results</h2>
      {selectedOptions.map((option, index) => (
        <p key={index}>{`Quiz ${index + 1}: ${option}`}</p>
      ))}
    </div>
  );
};

export default Results;
