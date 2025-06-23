import Link from "next/link";

export default function NasaHunch() {
  return (
    <main className="min-h-screen bg-white text-black font-serif p-6 md:p-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="border-b pb-6">
          <Link href="/projects" className="text-sm text-neutral-500 hover:text-black transition-colors">
            ← Back to outputs
          </Link>
          <h1 className="text-4xl md:text-6xl font-light leading-tight mt-4">
            NASA Hunch Trash Ejection System
          </h1>
          <p className="mt-2 text-lg text-neutral-700">
            Team Lead, CAD Specialist
          </p>
        </header>

        <section className="space-y-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              Led a team of four to design and prototype a trash ejection system for future Mars missions. 
              Our team was selected as one of four national finalists for our project.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-light tracking-tight text-black border-b pb-2">
              Project Overview
            </h2>
            <ul className="space-y-2 font-mono text-sm leading-relaxed">
              <li>Designed waste management system for Mars mission habitats</li>
              <li>Addressed critical challenge of waste disposal in space</li>
              <li>Prototyped mechanical ejection mechanism</li>
              <li>Ensured system reliability in extreme conditions</li>
              <li>Met NASA&apos;s stringent safety and performance requirements</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-light tracking-tight text-black border-b pb-2">
              Technical Design
            </h2>
            <ul className="space-y-2 font-mono text-sm leading-relaxed">
              <li>CAD modeling and 3D design using industry-standard software</li>
              <li>Mechanical system design for vacuum and low-gravity environments</li>
              <li>Material selection for space-grade applications</li>
              <li>Prototype fabrication and testing</li>
              <li>Failure mode analysis and risk mitigation</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-light tracking-tight text-black border-b pb-2">
              Team Leadership
            </h2>
            <ul className="space-y-2 font-mono text-sm leading-relaxed">
              <li>Led team of 4 engineers and designers</li>
              <li>Coordinated design reviews and milestone deliverables</li>
              <li>Managed project timeline and resource allocation</li>
              <li>Presented technical solutions to NASA engineers</li>
              <li>Facilitated collaboration across different engineering disciplines</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-light tracking-tight text-black border-b pb-2">
              Technologies & Skills
            </h2>
            <p className="font-mono text-sm leading-relaxed">
              CAD, Mechanical Design, Prototyping, Team Leadership, Aerospace Engineering, Systems Engineering
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-light tracking-tight text-black border-b pb-2">
              Achievement
            </h2>
            <p className="font-mono text-sm leading-relaxed">
              Selected as one of four national finalists in the NASA HUNCH program, competing against 
              teams from across the country. This recognition validated our innovative approach to 
              solving critical space exploration challenges and demonstrated the quality of our 
              engineering design and team collaboration.
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