import Link from "next/link";

export default function About() {
  return (
    <>
      <header className="border-b pb-6">
        <h1 className="text-5xl md:text-7xl font-light leading-tight">
          Me
        </h1>
        <div className="mt-4 space-y-2">
          <a 
            href="https://www.linkedin.com/in/miles-nash/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg text-neutral-700 hover:text-black transition-colors underline"
          >
            LinkedIn
          </a>
          <br />
          <a 
            href="https://x.com/milesnash_?s=21" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg text-neutral-700 hover:text-black transition-colors underline"
          >
            X (Twitter)
          </a>
        </div>
        <p className="mt-6 text-lg text-neutral-700">
          A little about my story, my work, and how I see the world.
        </p>
      </header>

      <div className="space-y-10">
        <section className="space-y-4">
          <h2 className="text-3xl font-medium tracking-tight">Now</h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Currently in Seattle, building cloud infrastructure at Microsoft. Reading &ldquo;Stranger in a Strange Land&rdquo;. Thinking about AI-native workflows, techno-minimalism, and the future of interfaces.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-medium tracking-tight">Technical Skills</h2>
          <div className="space-y-4 text-lg leading-relaxed font-mono text-base">
            <p>
              Experience across the stack, from hardware to software:
            </p>
            <ul className="list-disc pl-6 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
              <li>C / C++</li>
              <li>Python</li>
              <li>Java</li>
              <li>RISC-V Assembly</li>
              <li>Verilog / SystemVerilog</li>
              <li>PCB Design</li>
              <li>Embedded Systems</li>
              <li>Networking</li>
            </ul>
          </div>
        </section>
      </div>

      <footer className="border-t pt-6 text-sm text-neutral-500">
        <Link href="/" className="hover:underline">
           Back home
        </Link>
      </footer>
    </>
  );
} 