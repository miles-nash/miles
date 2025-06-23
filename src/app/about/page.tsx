import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-white text-black font-serif p-6 md:p-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="border-b pb-6">
          <h1 className="text-5xl md:text-7xl font-light leading-tight">
            Me
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
                My journey into technology began with a simple desire to understand how things work. This led me from high school robotics to UC Berkeley, where I&apos;m studying Electrical Engineering and Computer Science. I&apos;ve worked on guidance systems for satellites at Lockheed Martin and next-generation wireless hardware at Tesla, learning that the most rewarding problems lie at the intersection of hardware, software, and human experience.
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
            ← Back home
          </Link>
        </footer>
      </div>
    </main>
  );
} 