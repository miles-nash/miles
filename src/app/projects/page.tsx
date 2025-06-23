import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Model Y Passive Entry",
      link: "/projects/tesla-wireless",
      starred: true
    },
    {
      title: "3-Stage RISC-V CPU",
      link: "/projects/risc-v-cpu",
      starred: true
    },
    {
      title: "IoT Smart Fan",
      link: "/projects/iot-fan"
    },
    {
      title: "CS61Classify",
      link: "/projects/cs61classify"
    },
    {
      title: "Satellite Guidance System",
      link: "/projects/satellite-guidance"
    },
    {
      title: "NASA Hunch Trash Ejection System",
      link: "/projects/nasa-hunch"
    },
    {
      title: "People's Prompt",
      link: "https://www.peoplesprompt.org/",
      external: true
    },
    {
      title: "Electronic Lifeguard Arm Band",
      link: "https://www.hackster.io/milesnash_/electronic-lifeguard-arm-band-4d5035",
      external: true
    },
    {
      title: "3D Printer Fire Safety",
      link: "https://www.hackster.io/milesnash_/3d-printer-fire-safety-448acf",
      external: true
    },
    {
      title: "3D Printer Monitoring with Alexa and Arduino",
      link: "https://www.hackster.io/milesnash_/3d-printer-monitoring-with-alexa-and-arduino-024292",
      external: true,
      starred: true
    },
    {
      title: "Multi-functional Display for Weather, Time & Date",
      link: "https://www.hackster.io/milesnash_/multi-functional-display-for-weather-time-and-date-0827ca",
      external: true
    },
    {
      title: "New Year's Countdown Display",
      link: "https://www.hackster.io/milesnash_/new-year-s-countdown-aeefff",
      external: true
    },
    {
      title: "Autonomous Line-Following Hovercraft",
      link: "https://www.hackster.io/milesnash_/autonomous-line-following-hovercraft-61db44",
      external: true
    }
  ];

  return (
    <main className="min-h-screen bg-white text-black font-serif p-6 md:p-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="border-b pb-6">
          <Link href="/" className="text-sm text-neutral-500 hover:text-black transition-colors">
            ← Back home
          </Link>
          <h1 className="text-4xl md:text-6xl font-light leading-tight mt-4">
            Outputs
          </h1>
          <p className="mt-2 text-lg text-neutral-700">
            Projects, experiments, and things I&apos;ve built.
          </p>
        </header>

        <div className="grid gap-4">
          {projects.map((project, index) => (
            <Link 
              key={index}
              href={project.link} 
              className="block group"
              target={project.external ? "_blank" : undefined}
              rel={project.external ? "noopener noreferrer" : undefined}
            >
              <div className="font-mono text-base leading-relaxed text-black group-hover:text-neutral-600 transition-colors py-2">
                {project.starred && (
                  <span className="text-amber-400 mr-3">★</span>
                )}
                {project.title}
                {project.external && (
                  <span className="text-xs text-neutral-400 ml-3">↗</span>
                )}
              </div>
            </Link>
          ))}
        </div>

        <footer className="border-t pt-6 text-sm text-neutral-500">
          <Link href="/" className="hover:underline">
            ← Back home
          </Link>
        </footer>
      </div>
    </main>
  );
} 