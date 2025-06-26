'use client'

import Link from 'next/link'
import React from 'react';

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
      <div className="flex min-h-screen bg-white text-black font-sans">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen px-8 py-12 bg-white fixed left-0 top-0 flex flex-col items-start">
          <h1 className="text-[3.5rem] font-extrabold mb-10 leading-none">Miles Nash</h1>
          <nav className="flex flex-col gap-20 text-[1.375rem] font-normal leading-none">
            <Link href="/about" className="hover:underline">/about</Link>
            <span className="h-4" />
            <Link href="/favorites" className="hover:underline">/inputs</Link>
            <span className="h-4" />
            <Link href="/projects" className="hover:underline">/outputs</Link>
            <span className="h-4" />
            <Link href="/mantras" className="hover:underline">/mantras</Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-64 flex flex-col items-center justify-center py-8">
          <div className="w-1/2 mx-auto flex flex-col items-center mt-16 gap-16">
            {/* ASCII Tree */}
            <pre className="text-[15px] leading-none font-mono text-neutral-700 mb-8 whitespace-pre text-center">{asciiTree}</pre>

            {/* Headline */}
            <h2 className="text-5xl font-extrabold font-serif text-neutral-900 mb-8 text-center">Engineer, explorer, builder of systems.</h2>

            {/* Intro Paragraph */}
            <p className="text-xl text-neutral-800 mb-20 text-center">
              I'm a technical program manager and hardware enthusiast focused on building tools, experiences, and environments that bridge the physical and digital. This site is my digital studio — part archive, part playground, and a window into what I'm thinking, building, and reading.
            </p>

            {/* Terminal Prompt with blinking cursor */}
            <div className="w-full flex justify-center mt-8">
              <span className="font-mono text-lg text-neutral-600">$_ cd /projects<span className="blink">|</span></span>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

