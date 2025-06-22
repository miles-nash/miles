export default function Philosophy() {
  return (
    <main className="min-h-screen bg-white text-black font-serif p-6 md:p-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="border-b pb-6">
          <h1 className="text-5xl md:text-7xl font-semibold leading-tight">Philosophy</h1>
          <p className="mt-2 text-lg text-neutral-700">
            Design principles and methodology.
          </p>
        </header>

        {/* Quote */}
        <div className="py-6 border-l-4 border-neutral-200 pl-6">
          <blockquote className="text-lg italic text-neutral-700 leading-relaxed">
            "Simplicity is the ultimate sophistication."
          </blockquote>
          <cite className="block mt-2 text-sm text-neutral-500">— Leonardo da Vinci</cite>
        </div>

        <div className="space-y-12">
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight">Design Principles</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-neutral-200 pl-6">
                <h3 className="text-xl font-medium">Clarity Over Complexity</h3>
                <p className="text-lg leading-relaxed text-neutral-700">
                  I believe in making the complex simple, not the simple complex. Every element should serve a clear purpose and contribute to the overall understanding.
                </p>
              </div>
              
              <div className="border-l-4 border-neutral-200 pl-6">
                <h3 className="text-xl font-medium">Human-Centered Design</h3>
                <p className="text-lg leading-relaxed text-neutral-700">
                  Technology should serve human needs and enhance human capabilities. I always start with the human experience and work backwards to the technology.
                </p>
              </div>
              
              <div className="border-l-4 border-neutral-200 pl-6">
                <h3 className="text-xl font-medium">Intentional Minimalism</h3>
                <p className="text-lg leading-relaxed text-neutral-700">
                  Less is more, but only when every remaining element is intentional and meaningful. I strive for elegance through thoughtful reduction.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight">Methodology</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-neutral-200 pl-6">
                <h3 className="text-xl font-medium">Systems Thinking</h3>
                <p className="text-lg leading-relaxed text-neutral-700">
                  I approach problems holistically, understanding how individual components interact within larger systems. This helps me create solutions that are both elegant and effective.
                </p>
              </div>
              
              <div className="border-l-4 border-neutral-200 pl-6">
                <h3 className="text-xl font-medium">Iterative Refinement</h3>
                <p className="text-lg leading-relaxed text-neutral-700">
                  I believe in rapid prototyping and continuous improvement. Each iteration brings clarity and refinement, moving closer to the ideal solution.
                </p>
              </div>
              
              <div className="border-l-4 border-neutral-200 pl-6">
                <h3 className="text-xl font-medium">Cross-Disciplinary Approach</h3>
                <p className="text-lg leading-relaxed text-neutral-700">
                  I draw inspiration from diverse fields—architecture, engineering, philosophy, and art. The best solutions often emerge from unexpected connections.
                </p>
              </div>
            </div>
          </section>
        </div>

        <footer className="border-t pt-6 text-sm text-neutral-500">
          <a href="/" className="hover:underline">← Back home</a>
        </footer>
      </div>
    </main>
  );
} 