import React from 'react';
import Link from 'next/link';

const workTimeline = [
  "Founded high-school robotics club",
  "Lockheed Martin: Electrical Engineering",
  "Lockheed Martin: Manufacturing",
  "Lockheed Martin: Guidance Software",
  "Hypernova Space: Engine Design (part time)",
  "Tesla: Technical Program Management (Wireless)",
  "Microsoft: Technical Program Management (Cloud)",
];

const projects = [
  { title: "Model Y Passive Entry", link: "/projects/tesla-wireless" },
  { title: "3-Stage RISC-V CPU", link: "/projects/risc-v-cpu" },
  { title: "IoT Smart Fan", link: "/projects/iot-fan" },
  { title: "CS61Classify", link: "/projects/cs61classify" },
  { title: "Satellite Guidance System", link: "/projects/satellite-guidance" },
  { title: "NASA Hunch Trash Ejection System", link: "/projects/nasa-hunch" },
  { title: "People's Prompt", link: "https://www.peoplesprompt.org/", external: true },
  { title: "Electronic Lifeguard Arm Band", link: "https://www.hackster.io/milesnash_/electronic-lifeguard-arm-band-4d5035", external: true },
  { title: "3D Printer Fire Safety", link: "https://www.hackster.io/milesnash_/3d-printer-fire-safety-448acf", external: true },
  { title: "3D Printer Monitoring with Alexa and Arduino", link: "https://www.hackster.io/milesnash_/3d-printer-monitoring-with-alexa-and-arduino-024292", external: true },
  { title: "Multi-functional Display for Weather, Time & Date", link: "https://www.hackster.io/milesnash_/multi-functional-display-for-weather-time-and-date-0827ca", external: true },
  { title: "New Year's Countdown Display", link: "https://www.hackster.io/milesnash_/new-year-s-countdown-aeefff", external: true },
  { title: "Autonomous Line-Following Hovercraft", link: "https://www.hackster.io/milesnash_/autonomous-line-following-hovercraft-61db44", external: true },
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
      
      <div className="space-y-12">
        <section className="mt-12 w-full max-w-2xl">
          <h2 className="text-2xl font-bold mb-4 text-left">Career Timeline</h2>
          <div className="text-left space-y-2 text-lg">
            {workTimeline.map((item, idx) => (
              <div key={idx}>{item}</div>
            ))}
          </div>
        </section>

        <section className="w-full max-w-2xl">
          <h2 className="text-2xl font-bold mb-4 text-left">Projects</h2>
          <div className="text-left space-y-2 text-lg">
            {projects.map((project, idx) => (
              <div key={idx}>
                {project.external ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">{project.title}</a>
                ) : (
                  <Link href={project.link} className="hover:underline">{project.title}</Link>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
} 