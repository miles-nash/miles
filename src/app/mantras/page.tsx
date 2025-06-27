import Link from "next/link";
import React from "react";

export default function Mantras() {
  return (
    <>
      <div className="relative z-10 p-8 md:p-16">
        {/* Simple header */}
        <div className="mb-20 text-left">
          <h1 className="text-5xl md:text-7xl font-light leading-none tracking-tight mb-6 text-black text-left">
            mantras
          </h1>
        </div>

        {/* Individual insights - subtle variations */}
        <div className="max-w-3xl space-y-8 text-left">
          <p className="text-xl leading-relaxed text-black">
            Stay Hungry, Stay Foolish.
          </p>

          <p className="text-xl leading-relaxed text-black">
            The people who are crazy enough to think they can change the world are the ones who do.
          </p>
          
          <p className="text-xl leading-relaxed text-black">
            Design is not just what it looks like and feels like. Design is how it works.
          </p>
          
          <p className="text-xl leading-relaxed text-black">
            The magic you are looking for is in the work you have been avoiding.
          </p>

          <p className="text-xl leading-relaxed text-black max-w-2xl">
            Clarity doesn't come from thinking. It comes from doing.
          </p>

          <p className="text-xl leading-relaxed text-black">
            Simplicity is the ultimate sophistication.
          </p>

          <p className="text-xl leading-relaxed text-black max-w-2xl">
            We are as gods and might as well get good at it.
          </p>

          <p className="text-xl leading-relaxed text-black">
            The brave may not live forever, but the cautious do not live at all.
          </p>

          <p className="text-xl leading-relaxed text-black">
            The genius is the ability to recapture childhood at will.
          </p>
        </div>

        {/* Footer */}
        <footer className="text-center pt-16">
          <Link href="/" className="text-black font-mono hover:opacity-70 transition-opacity">
             Back home
          </Link>
        </footer>
      </div>
    </>
  );
} 