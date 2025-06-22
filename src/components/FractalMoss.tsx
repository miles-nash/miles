import React from 'react';

interface FractalMossProps {
  className?: string;
  opacity?: number;
  scale?: number;
}

export default function FractalMoss({ className = "", opacity = 0.1, scale = 1 }: FractalMossProps) {
  return (
    <div className={`absolute pointer-events-none ${className}`} style={{ opacity, transform: `scale(${scale})` }}>
      <svg width="200" height="300" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main vine */}
        <path 
          d="M100 300 Q80 250 90 200 Q100 150 85 100 Q70 50 100 0" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none"
          className="animate-pulse"
        />
        
        {/* Left branches */}
        <path 
          d="M90 200 Q70 180 60 160 Q50 140 40 120" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '0.5s' }}
        />
        <path 
          d="M85 100 Q65 80 55 60 Q45 40 35 20" 
          stroke="currentColor" 
          strokeWidth="1" 
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        
        {/* Right branches */}
        <path 
          d="M110 200 Q130 180 140 160 Q150 140 160 120" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '0.7s' }}
        />
        <path 
          d="M115 100 Q135 80 145 60 Q155 40 165 20" 
          stroke="currentColor" 
          strokeWidth="1" 
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '1.2s' }}
        />
        
        {/* Small leaves */}
        <ellipse cx="60" cy="160" rx="3" ry="6" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
        <ellipse cx="140" cy="160" rx="3" ry="6" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
        <ellipse cx="55" cy="60" rx="2" ry="4" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
        <ellipse cx="145" cy="60" rx="2" ry="4" fill="currentColor" className="animate-pulse" style={{ animationDelay: '1.1s' }} />
        
        {/* Moss clusters */}
        <circle cx="80" cy="220" r="2" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
        <circle cx="120" cy="220" r="2" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
        <circle cx="70" cy="80" r="1.5" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.9s' }} />
        <circle cx="130" cy="80" r="1.5" fill="currentColor" className="animate-pulse" style={{ animationDelay: '1.3s' }} />
      </svg>
    </div>
  );
} 