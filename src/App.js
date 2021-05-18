import React from 'react';
import { arc } from 'd3';

import './App.css';

const width = 960;
const height = 500;
const smallHeight = 123;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 3;
const radius = centerY - strokeWidth / 2;
const dotRadius = 30;
const centerCircleWidth = 5;

const rightHalf = arc()
  .innerRadius(0)
  .outerRadius(radius)
  .startAngle(0)
  .endAngle(Math.PI);

const centerBot = arc()
  .innerRadius(0)
  .outerRadius(smallHeight + centerCircleWidth)
  .startAngle(0)
  .endAngle(Math.PI * 2);

const App = () => (
  <svg width={width} height={height}>
      <circle
        transform={`translate(${centerX},${centerY})`}
        r={radius}
        fill="white"
        stroke="black"
        strokeWidth={strokeWidth} 
      />
      <path transform={`translate(${centerX},${centerY})`} d ={rightHalf()} />
      <circle
        cx={centerX}
        cy={centerY / 2}
        r={smallHeight}
        fill="white"
      />
      <path transform={`translate(${centerX},${centerY + smallHeight + 2})`} d={centerBot()}/>
      <circle
        cx={centerX}
        cy={centerY / 2}
        r={dotRadius}
      />
      <circle
        cx={centerX}
        cy={centerY * 3/2}
        r={dotRadius}
        fill="white"
      />
  </svg>
);

export default App;