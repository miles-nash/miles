'use client'

import React from 'react';
import Link from 'next/link';

const asciiTree = `&&& &&  & &&
&& &\\/&\\|& ()|/ @, &&
&\\/(/&/&||/& /_/) &_/&
&() &\\/&|()|/&\\/ '%" & ()
&_\\_&&_\\ |& |&&/&__%_/_& &&
&& && & &| /& & % ()& /&&
()&_---()&\\&\\|&&-&&--%---()~
&&     \\
         |||
         |||
         |||
         |||
         |||
     , -=-~  .-^- _
`;

// Blinking cursor style
const blinkStyle = `
@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}
.blink {
  display: inline-block;
  width: 1ch;
  animation: blink 1s steps(1) infinite;
}
`;

export default function Home() {
  return (
    <>
      <style>{blinkStyle}</style>
      <div className="w-full flex flex-col items-center text-center pt-40">
        {/* ASCII Tree */}
        <pre className="text-[15px] leading-none font-mono text-neutral-700 mb-8 whitespace-pre">{asciiTree}</pre>

        {/* Headline */}
        <h2 className="text-5xl font-extrabold font-serif text-neutral-900 mb-8">Engineer, explorer, builder of systems.</h2>

        {/* Intro Paragraph */}
        <p className="text-xl text-neutral-800 mb-20 max-w-2xl">
          I'm a technical program manager and hardware enthusiast focused on building tools, experiences, and environments that bridge the physical and digital. This site is my digital studio — part archive, part playground, and a window into what I'm thinking, building, and reading.
        </p>

        {/* Terminal Prompt with blinking cursor */}
        <div className="w-full flex justify-center mt-8">
          <span className="font-mono text-lg text-neutral-600">$_ cd /projects<span className="blink">|</span></span>
        </div>
      </div>
    </>
  );
}

