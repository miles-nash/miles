"use client";

import React from 'react';

const FractalVine = () => {
  return (
    <svg
      width="200"
      height="600"
      viewBox="0 0 200 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-4 top-0 h-full w-auto opacity-80 z-10"
    >
      {/* Main vine stem */}
      <path
        d="M 100 600 Q 120 500 110 400 Q 100 300 90 200 Q 80 100 100 0"
        stroke="#93c47d"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Branch 1 */}
      <path
        d="M 100 500 Q 130 480 140 460 Q 150 440 145 420"
        stroke="#93c47d"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Branch 2 */}
      <path
        d="M 100 400 Q 70 380 60 360 Q 50 340 55 320"
        stroke="#93c47d"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Branch 3 */}
      <path
        d="M 100 300 Q 130 280 140 260 Q 150 240 145 220"
        stroke="#93c47d"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Branch 4 */}
      <path
        d="M 100 200 Q 70 180 60 160 Q 50 140 55 120"
        stroke="#93c47d"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Branch 5 */}
      <path
        d="M 100 100 Q 130 80 140 60 Q 150 40 145 20"
        stroke="#93c47d"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Leaves */}
      <ellipse cx="145" cy="420" rx="8" ry="12" fill="#93c47d" transform="rotate(45 145 420)" />
      <ellipse cx="55" cy="320" rx="8" ry="12" fill="#93c47d" transform="rotate(-45 55 320)" />
      <ellipse cx="145" cy="220" rx="8" ry="12" fill="#93c47d" transform="rotate(45 145 220)" />
      <ellipse cx="55" cy="120" rx="8" ry="12" fill="#93c47d" transform="rotate(-45 55 120)" />
      <ellipse cx="145" cy="20" rx="8" ry="12" fill="#93c47d" transform="rotate(45 145 20)" />
      
      {/* Small leaves on main stem */}
      <ellipse cx="110" cy="450" rx="6" ry="10" fill="#93c47d" transform="rotate(30 110 450)" />
      <ellipse cx="90" cy="350" rx="6" ry="10" fill="#93c47d" transform="rotate(-30 90 350)" />
      <ellipse cx="110" cy="250" rx="6" ry="10" fill="#93c47d" transform="rotate(30 110 250)" />
      <ellipse cx="90" cy="150" rx="6" ry="10" fill="#93c47d" transform="rotate(-30 90 150)" />
      <ellipse cx="110" cy="50" rx="6" ry="10" fill="#93c47d" transform="rotate(30 110 50)" />
    </svg>
  );
};

export default FractalVine; 