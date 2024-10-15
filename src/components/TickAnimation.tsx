import React from "react";



class TickAnimation extends React.Component {
  render() {
   
    return (
      <div className="className">
        <svg width="45" height="45"
        viewBox="0 0 400 400">
          <circle
            fill="none"
            stroke="#ff7644"
            strokeWidth="20" 
            cx="200"
            cy="200"
            r="190"
            strokeLinecap="round"
            transform="rotate(-90 200 200)"
            className="circle"
          />
          <polyline
            fill="none"
            stroke="#ff7644"
            points="88,214 173,284 304,138"
            strokeWidth="24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="tick"
          />
        </svg>
      </div>
    );
  }
}

export default TickAnimation;