import Link from "next/link";

export default function SatelliteGuidance() {
  return (
    <main className="min-h-screen bg-white text-black font-serif p-6 md:p-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="border-b pb-6">
          <Link href="/projects" className="text-sm text-neutral-500 hover:text-black transition-colors">
            ← Back to outputs
          </Link>
          <h1 className="text-4xl md:text-6xl font-light leading-tight mt-4">
            Satellite Guidance System
          </h1>
          <p className="mt-2 text-lg text-neutral-700">
            Software Engineering Intern, Lockheed Martin
          </p>
        </header>

        <section className="space-y-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              Developed and tested momentum management software for a new generation of commercial satellites. 
              Worked with MATLAB, Simulink, and C++ on the core guidance, navigation, and controls (GNC) system.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-light tracking-tight text-black border-b pb-2">
              Technical Implementation
            </h2>
            <ul className="space-y-2 font-mono text-sm leading-relaxed">
              <li>Momentum management algorithm development in C++</li>
              <li>System modeling and simulation in MATLAB/Simulink</li>
              <li>Guidance, Navigation, and Control (GNC) system integration</li>
              <li>Real-time software testing and validation</li>
              <li>Documentation and requirements traceability</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-light tracking-tight text-black border-b pb-2">
              Technologies & Skills
            </h2>
            <p className="font-mono text-sm leading-relaxed">
              C++, MATLAB, Simulink, Aerospace, GNC, Control Systems
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-light tracking-tight text-black border-b pb-2">
              Impact
            </h2>
            <p className="font-mono text-sm leading-relaxed">
              Contributed to the development of critical satellite control systems that ensure proper 
              orbital positioning and attitude control. The momentum management software helps maintain 
              satellite stability and extends operational lifetime.
            </p>
          </div>
        </section>

        <footer className="border-t pt-6 text-sm text-neutral-500">
          <Link href="/projects" className="hover:underline">
            ← Back to outputs
          </Link>
        </footer>
      </div>
    </main>
  );
} 