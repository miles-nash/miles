import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-white text-black font-serif p-6 md:p-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="border-b pb-6">
          <h1 className="text-5xl md:text-7xl font-light leading-tight">
            About Me
          </h1>
          <p className="mt-2 text-lg text-neutral-700">
            A little about my story, my work, and how I see the world.
          </p>
        </header>

        <div className="space-y-10">
          <section className="space-y-4">
            <h2 className="text-3xl font-medium tracking-tight">My Story</h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                My journey into technology began with a simple desire to understand how things work, and a curiosity to make them work better. This led me from a high school robotics club to UC Berkeley, where I'm studying Electrical Engineering and Computer Science. It was here that I discovered my passion for building not just things, but systems—and for understanding the human needs they serve.
              </p>
              <p>
                I've been fortunate to have a diverse range of experiences, from developing guidance systems for commercial satellites at Lockheed Martin to leading the development of a next-generation wireless hardware system at Tesla. Each role has reinforced my belief that the most challenging and rewarding problems lie at the intersection of hardware, software, and human experience.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-medium tracking-tight">What Excites Me</h2>
            <div className="text-lg leading-relaxed">
              <ul className="list-disc pl-6 space-y-2">
                <li>Clarity in Ambiguity</li>
                <li>Building Interesting Things with Interested People</li>
                <li>Work in the World</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-medium tracking-tight">Technical Skills</h2>
            <div className="space-y-4 text-lg leading-relaxed font-mono text-base">
              <p>
                I have experience across the stack, from hardware to software. Here are a few of the areas I've worked in:
              </p>
              <ul className="list-disc pl-6 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                <li>C / C++</li>
                <li>Python</li>
                <li>Java</li>
                <li>RISC-V Assembly</li>
                <li>Verilog / SystemVerilog</li>
                <li>Matlab / Simulink</li>
                <li>PCB Design (Altium, Eagle)</li>
                <li>VLSI Design (Cadence, Synopsys)</li>
                <li>Embedded Systems</li>
                <li>Networking</li>
              </ul>
            </div>
          </section>
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