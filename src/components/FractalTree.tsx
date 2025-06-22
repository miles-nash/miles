"use client";

import React, { useRef, useEffect } from 'react';

const FractalTree = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = 500;
    const height = 400;
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = '250px';
    canvas.style.height = '200px';

    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = '#93c47d';
    ctx.lineCap = 'round';

    function draw(startX: number, startY: number, len: number, angle: number, branchWidth: number, depth: number) {
      if (depth > 10 || !ctx) return;

      ctx.beginPath();
      ctx.moveTo(startX, startY);
      
      const endX = startX + len * Math.cos(angle);
      const endY = startY + len * Math.sin(angle);
      
      ctx.lineTo(endX, endY);
      ctx.lineWidth = branchWidth;
      ctx.stroke();

      const newLen = len * 0.8;
      const newBranchWidth = branchWidth > 0.5 ? branchWidth * 0.8 : 0.5;
      
      const angleDelta = 0.5 + (depth * 0.1);

      draw(endX, endY, newLen, angle - angleDelta, newBranchWidth, depth + 1);
      draw(endX, endY, newLen, angle + angleDelta, newBranchWidth, depth + 1);
    }
    
    const startingAngle = -90 * Math.PI / 180;
    draw(width / 2, height, 80, startingAngle, 4, 0);

  }, []);

  return <canvas ref={canvasRef} />;
};

export default FractalTree; 