import React from 'react';

const CurvedText = ({ text }) => {
  return (
    <svg width="0" height="0" viewBox="1">
      <path id="curve" d="M 0 120 C 0 120,130 0,260 120" fill='transparent'></path>
      <text width="800" fontSize="24" fill="white">
        <textPath href="#curve" startOffset="15%">
          {text}
        </textPath>
      </text>
    </svg>
  );
};

export default CurvedText;