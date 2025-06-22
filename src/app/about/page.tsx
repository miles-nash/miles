export default function About() {
  return (
    <main className="min-h-screen bg-white text-black font-serif p-6 md:p-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="border-b pb-6">
          <h1 className="text-5xl md:text-7xl font-semibold leading-tight">About</h1>
          <p className="mt-2 text-lg text-neutral-700">
            Understanding the person behind the work.
          </p>
        </header>

        {/* Quote */}
        <div className="py-6 border-l-4 border-neutral-200 pl-6">
          <blockquote className="text-lg italic text-neutral-700 leading-relaxed">
            "Know thyself."
          </blockquote>
          <cite className="block mt-2 text-sm text-neutral-500">— Ancient Greek Proverb</cite>
        </div>

        <div className="space-y-8">
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight">Background</h2>
            <p className="text-lg leading-relaxed">
              I'm a designer and researcher with a deep fascination for how technology intersects with human experience. My journey began at a Maker Faire when I was 12, where I discovered that I could not only understand how things work, but actually make them work.
            </p>
            <p className="text-lg leading-relaxed">
              This early curiosity led me to study Electrical Engineering and Computer Science at UC Berkeley, where I balanced technical rigor with humanistic thinking. I built everything from a full TCP stack in Python to interactive art installations, always asking how technology can serve human needs rather than the other way around.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight">Approach</h2>
            <p className="text-lg leading-relaxed">
              My work is grounded in systems thinking and human-centered design. I believe that the most impactful solutions come from understanding the broader context—the people, processes, and environments that technology serves.
            </p>
            <p className="text-lg leading-relaxed">
              Whether I'm designing computational tools for architects, researching human-computer interaction, or building AI-native workflows, I always start with the human experience and work backwards to the technology.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight">Values</h2>
            <ul className="space-y-4 text-lg leading-relaxed">
              <li><strong>Clarity over complexity</strong> — I believe in making the complex simple, not the simple complex.</li>
              <li><strong>Human agency</strong> — Technology should empower people, not replace their judgment.</li>
              <li><strong>Intentional design</strong> — Every element should serve a purpose and contribute to the whole.</li>
              <li><strong>Continuous learning</strong> — I'm always exploring new domains and challenging my assumptions.</li>
            </ul>
          </section>
        </div>

        <footer className="border-t pt-6 text-sm text-neutral-500">
          <a href="/" className="hover:underline">← Back home</a>
        </footer>
      </div>
    </main>
  );
} 