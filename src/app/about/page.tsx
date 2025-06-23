import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-white text-black font-serif p-6 md:p-16">
      <div className="max-w-4xl mx-auto space-y-12">
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
            <h2 className="text-3xl font-medium tracking-tight">Previously</h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                My journey has been a restless pursuit of turning ideas into tangible artifacts, from early robotics projects to designing a TCP/IP stack from scratch. This drive led me to UC Berkeley for Electrical Engineering and Computer Science, where I immersed myself in the worlds of AI and hardware. I thrive at the intersection of ambitious technology and human narrative—seeking clarity in the ambiguity of new frontiers. My path has taken me from developing satellite guidance systems at Lockheed Martin to engineering next-generation wireless hardware at Tesla, each experience reinforcing my belief in technology as a powerful lever for human potential.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-medium tracking-tight">What Excites Me</h2>
            <div className="text-lg leading-relaxed space-y-2">
              <p>Clarity in Ambiguity</p>
              <p>Building Interesting Things with Interested People</p>
              <p>Tangible Impact on the World Around Me</p>
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
            ← Back home
          </Link>
        </footer>
      </div>
    </main>
  );
} 