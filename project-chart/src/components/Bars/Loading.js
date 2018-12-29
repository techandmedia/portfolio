import React from "react";

export default function Loading() {
  return (
    <React.Fragment>
      <g>
        <title>background</title>
        <rect
          fill="#ffffff"
          id="canvas_background"
          height="29"
          width="107"
          y="150"
          x="150"
        />
        <g
          display="none"
          overflow="visible"
          y="150"
          x="150"
          height="100%"
          width="100%"
          id="canvasGrid"
        >
          <rect
            fill="url(#gridpattern)"
            strokeWidth="0"
            y="150"
            x="150"
            height="100%"
            width="100%"
          />
        </g>
      </g>
      <g>
        <title>Layer 1</title>
        <text
          // xml:space="preserve"
          textAnchor="start"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize="24"
          id="svg_1"
          y="200"
          x="150"
          strokeWidth="0"
          stroke="#000"
          fill="#7f59c1"
        >
          Loading...
        </text>
      </g>
    </React.Fragment>
  );
}
