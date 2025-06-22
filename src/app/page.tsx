import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-serif p-6 md:p-16">
      <div className="max-w-3xl mx-auto space-y-12">
        <header className="border-b pb-6">
          <h1 className="text-5xl md:text-7xl font-semibold leading-tight">
            Miles Nash
          </h1>
          <p className="mt-2 text-lg text-neutral-700">
            Finding clarity in ambiguity — building at the intersection of hardware, systems, and spirit.
          </p>
        </header>

        {/* ASCII Art */}
        <section className="space-y-4">
          <pre className="font-mono text-xs md:text-sm text-neutral-800 text-center">
            {`    ╭─────────────────╮
    │  ╭─────────╮  │
    │  │  ╭───╮  │  │
    │  │  │ • │  │  │
    │  │  ╰───╯  │  │
    │  ╰─────────╯  │
    │     ╱│╲      │
    │    ╱ │ ╲     │
    │   ╱  │  ╲    │
    │  ╱   │   ╲   │
    │ ╱    │    ╲  │
    │╱     │     ╲ │
    ╰─────────────────╯`}
          </pre>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">Now</h2>
          <p className="text-base leading-relaxed">
            Currently in Seattle, building cloud infrastructure at Microsoft. Reading "Stranger in a Strange Land". Thinking about AI-native workflows, techno-minimalism, and the future of interfaces.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">Projects</h2>
          <ul className="list-disc pl-6 text-base text-neutral-800">
            <li><strong>People's Prompt</strong>: A creative AI zine & community project exploring public sentiment on AI.</li>
            <li><strong>Hovercraft Hackathon</strong>: Built a working hovercraft at Lockheed Martin, winning first place.</li>
            <li><strong>Hands-Free Copilot</strong>: An experimental desktop copilot with AI-driven task automation.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">Timeline</h2>
          <p className="text-base leading-relaxed">
            From early maker days in Colorado to building at Tesla and Microsoft. <a href="/timeline" className="underline hover:text-neutral-800">View my journey →</a>
          </p>
        </section>

        <footer className="border-t pt-6 text-sm text-neutral-500">
          <p>Minimalist site inspired by Harvard GSD, Gwern.net, and MIT Media Lab.</p>
        </footer>
      </div>
    </main>
  );
}
