export default function Projects() {
  return (
    <main className="min-h-screen bg-white text-black font-serif p-6 md:p-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="border-b pb-6">
          <h1 className="text-5xl md:text-7xl font-semibold leading-tight">Projects</h1>
          <p className="mt-2 text-lg text-neutral-700">
            Recent work and research explorations.
          </p>
        </header>

        {/* Quote */}
        <div className="py-6 border-l-4 border-neutral-200 pl-6">
          <blockquote className="text-lg italic text-neutral-700 leading-relaxed">
            "Build tools, not empires."
          </blockquote>
          <cite className="block mt-2 text-sm text-neutral-500">— Unknown</cite>
        </div>

        <div className="space-y-12">
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight">Computational Design</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-neutral-200 pl-6">
                <h3 className="text-xl font-medium">Generative Architecture Tools</h3>
                <p className="text-lg leading-relaxed text-neutral-700">
                  Developing computational design tools that help architects explore form and function through algorithmic generation. Focus on human-in-the-loop systems that augment rather than replace creative decision-making.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight">Human-Computer Interaction</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-neutral-200 pl-6">
                <h3 className="text-xl font-medium">AI-Native Workflows</h3>
                <p className="text-lg leading-relaxed text-neutral-700">
                  Researching how AI can enhance human creativity and productivity in design contexts. Exploring new interaction paradigms that leverage natural language and visual feedback.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight">Digital Fabrication</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-neutral-200 pl-6">
                <h3 className="text-xl font-medium">3D Printing Workflows</h3>
                <p className="text-lg leading-relaxed text-neutral-700">
                  Developing streamlined workflows for digital fabrication, from design to production. Creating tools that bridge the gap between digital models and physical objects.
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