export default function Philosophy() {
  return (
    <main className="min-h-screen bg-white text-black font-serif p-6 md:p-16">
      <div className="max-w-3xl mx-auto space-y-12">
        <header className="border-b pb-6">
          <h1 className="text-5xl md:text-7xl font-semibold leading-tight">Philosophy</h1>
          <p className="mt-2 text-lg text-neutral-700">
            A personal studio space for clarity, intentionality, and architectural thinking.
          </p>
        </header>

        <section className="space-y-6">
          <blockquote className="border-l-4 border-neutral-300 pl-4 italic text-xl">
            "Form follows clarity."
          </blockquote>
          
          <p className="text-base leading-relaxed">
            I build not just for utility, but for meaning. My compass is curiosity. My map is iterative failure. My north star is clarity.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">Principles</h2>
          <ul className="space-y-3 text-base leading-relaxed">
            <li><strong>Clarity over cleverness</strong> — The best solutions are often the simplest ones.</li>
            <li><strong>Intentionality in design</strong> — Every element should serve a purpose.</li>
            <li><strong>Minimalism as philosophy</strong> — Less is more, but better.</li>
            <li><strong>Editorial depth</strong> — Content should be thoughtful and well-crafted.</li>
            <li><strong>Architectural thinking</strong> — Systems and structures matter.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">Inspirations</h2>
          <ul className="list-disc pl-6 text-base text-neutral-800">
            <li><strong>Gwern.net</strong> — For its depth, clarity, and thoughtful exploration of ideas.</li>
            <li><strong>Harvard GSD</strong> — For its emphasis on architectural thinking and design rigor.</li>
            <li><strong>MIT Media Lab</strong> — For its experimental approach to technology and creativity.</li>
          </ul>
        </section>

        <footer className="border-t pt-6 text-sm text-neutral-500">
          <a href="/" className="hover:underline">← Back home</a>
        </footer>
      </div>
    </main>
  );
} 