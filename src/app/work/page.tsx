import React from 'react';

const workTimeline = [
  "Founded high-school robotics club",
  "Lockheed Martin: Electrical Engineering",
  "Lockheed Martin: Manufacturing",
  "Lockheed Martin: Guidance Software",
  "Hypernova Space: Engine Design (part time)",
  "Tesla: Technical Program Management (Wireless)",
  "Microsoft: Technical Program Management (Cloud)",
];

export default function Work() {
  return (
    <>
      <header className="border-b pb-6">
        <h1 className="text-4xl md:text-6xl font-light leading-tight mt-4">
          Work
        </h1>
        <p className="mt-2 text-lg text-neutral-700">
          A showcase of my professional work and career highlights.
        </p>
      </header>
      <section className="mt-12 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4 text-left">Career Timeline</h2>
        <div className="text-left space-y-2 text-lg">
          {workTimeline.map((item, idx) => (
            <div key={idx}>{item}</div>
          ))}
        </div>
      </section>
    </>
  );
} 