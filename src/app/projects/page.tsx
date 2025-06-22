export default function Projects() {
  return (
    <main className="min-h-screen bg-white text-black font-serif p-6 md:p-16">
      <div className="max-w-3xl mx-auto space-y-12">
        <header className="border-b pb-6">
          <h1 className="text-5xl md:text-7xl font-semibold leading-tight">/projects</h1>
          <p className="mt-2 text-lg text-neutral-700">
            Selected highlights from my journey building at the intersection of hardware, systems, and spirit.
          </p>
        </header>

        <section className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight">People's Prompt</h2>
            <p className="text-base leading-relaxed">
              A creative AI zine & community project exploring public sentiment on AI.
            </p>
            <p className="text-sm text-neutral-600 font-mono">
              → <a href="https://peoplesprompt.org" className="underline hover:text-neutral-800">peoplesprompt.org</a>
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight">Hovercraft Hackathon</h2>
            <p className="text-base leading-relaxed">
              Built a working hovercraft at Lockheed Martin, winning first place and earning three summer internships.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight">High School Robotics Club</h2>
            <p className="text-base leading-relaxed">
              Founded and scaled to 30+ members, raised $12K+ funding, podiumed at State in 2 years.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight">Hands-Free Copilot</h2>
            <p className="text-base leading-relaxed">
              An experimental desktop copilot with AI-driven task automation and voice interface.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight">3D Printing Business</h2>
            <p className="text-base leading-relaxed">
              Bootstrapped by mowing lawns; sold hundreds of fidget spinners at school until the dean shut it down.
            </p>
          </div>
        </section>

        <footer className="border-t pt-6 text-sm text-neutral-500">
          <a href="/" className="hover:underline">← Back home</a>
        </footer>
      </div>
    </main>
  );
} 