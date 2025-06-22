import Link from "next/link";
import React from "react";
import FractalMoss from "@/components/FractalMoss";
import FractalTree from "@/components/FractalTree";
import FractalVine from "@/components/FractalVine";

export default function Philosophy() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-green-50 to-emerald-100 text-black font-serif relative overflow-hidden">
      {/* Background fractal elements */}
      <div className="absolute inset-0 opacity-8">
        <FractalMoss className="top-0 left-0 text-green-800" opacity={1} scale={2} />
        <FractalMoss className="top-1/4 right-0 text-green-700" opacity={1} scale={1.5} />
        <FractalMoss className="bottom-0 left-1/3 text-green-600" opacity={1} scale={1.8} />
        <FractalMoss className="bottom-1/4 right-1/4 text-green-800" opacity={1} scale={1.2} />
        <FractalMoss className="top-1/2 left-1/4 text-green-700" opacity={1} scale={1.3} />
        <FractalMoss className="top-3/4 left-1/2 text-green-600" opacity={1} scale={1.1} />
        <FractalMoss className="top-1/6 right-1/3 text-green-800" opacity={1} scale={1.4} />
        <FractalMoss className="bottom-1/3 right-1/6 text-green-700" opacity={1} scale={1.6} />
        <FractalMoss className="top-2/3 left-1/6 text-green-600" opacity={1} scale={0.9} />
        <FractalMoss className="bottom-1/6 left-2/3 text-green-800" opacity={1} scale={1.7} />
        
        {/* Fractal trees in background */}
        <div className="absolute top-10 right-10 opacity-20">
          <FractalTree />
        </div>
        <div className="absolute bottom-20 left-10 opacity-15">
          <FractalTree />
        </div>
        <div className="absolute top-1/3 left-1/3 opacity-10">
          <FractalTree />
        </div>
      </div>

      {/* Fractal vine crawling up the left side */}
      <FractalVine />

      <div className="relative z-10 p-8 md:p-16">
        {/* Simple header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-light leading-none tracking-tight mb-6 text-black">
            philosophy
          </h1>
        </div>

        {/* Individual insights - subtle variations */}
        <div className="max-w-3xl mx-auto space-y-8">
          <p className="text-xl leading-relaxed text-black text-center">
            Build for the sake of building.
          </p>
          
          <p className="text-xl leading-relaxed text-black text-center max-w-2xl mx-auto">
            Explore for the sake of exploring.
          </p>
          
          <p className="text-xl leading-relaxed text-black text-center">
            Curiosity as the driving force.
          </p>
          
          <p className="text-xl leading-relaxed text-black text-center max-w-2xl mx-auto">
            Most alive creating—TCP stacks, robotics, zines.
          </p>

          <p className="text-xl leading-relaxed text-black text-center">
            "Technology as leverage for human potential"
          </p>

          <p className="text-xl leading-relaxed text-black text-center max-w-2xl mx-auto">
            Bicycles for the mind.
          </p>

          <p className="text-xl leading-relaxed text-black text-center">
            Energized by frontier ambiguity, imposes rapid iteration.
          </p>

          <p className="text-xl leading-relaxed text-black text-center max-w-2xl mx-auto">
            Trades stability for accelerated learning.
          </p>

          <p className="text-xl leading-relaxed text-black text-center">
            Zooms between tech and narrative, rallying collaborators.
          </p>

          <p className="text-xl leading-relaxed text-black text-center max-w-2xl mx-auto">
            Meritocratic optimism tempered by ethics.
          </p>

          <p className="text-xl leading-relaxed text-black text-center">
            Adventure over comfort.
          </p>

          <p className="text-xl leading-relaxed text-black text-center max-w-2xl mx-auto">
            Build → Learn → Share.
          </p>

          <p className="text-xl leading-relaxed text-black text-center">
            Jobs' intuition, Ive's craft, YC velocity.
          </p>

          <p className="text-xl leading-relaxed text-black text-center max-w-2xl mx-auto">
            Colorado outdoors.
          </p>

          <p className="text-xl leading-relaxed text-black text-center">
            "How It's Made" aesthetic—raw materials transform through process.
          </p>

          <p className="text-xl leading-relaxed text-black text-center max-w-2xl mx-auto">
            Intersection of ambitious tech and human narrative.
          </p>
        </div>

        {/* Footer */}
        <footer className="text-center pt-16">
          <Link href="/" className="text-black font-mono hover:opacity-70 transition-opacity">
            ← Back home
          </Link>
        </footer>
      </div>
    </main>
  );
} 