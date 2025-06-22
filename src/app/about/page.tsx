export default function About() {
  return (
    <main className="min-h-screen bg-white text-black font-serif p-6 md:p-16">
      <div className="max-w-3xl mx-auto space-y-12">
        <header className="border-b pb-6">
          <h1 className="text-5xl md:text-7xl font-semibold leading-tight">About</h1>
        </header>

        <section className="space-y-6">
          <p className="text-lg leading-relaxed">
            Hi, I'm Miles — a builder, tinkerer, and technical program manager passionate about shaping the future of physical technology and intelligent systems. From Colorado roots and outdoor adventures to managing Tesla vehicle programs and exploring AI at Microsoft, my journey is defined by curiosity, execution, and a drive to make ideas real.
          </p>
          
          <p className="text-base leading-relaxed">
            My work spans hardware, systems, and product leadership — blending engineering execution with a designer's intuition and a strategist's mindset.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">Philosophy</h2>
          <blockquote className="border-l-4 border-neutral-300 pl-4 italic text-lg">
            "Form follows clarity."
          </blockquote>
          <p className="text-base leading-relaxed">
            I build not just for utility, but for meaning. My compass is curiosity. My map is iterative failure. My north star is clarity.
          </p>
          <p className="text-base leading-relaxed">
            This site is a minimalist digital studio — a thought archive, personal lab notebook, and philosophical sketchpad. Inspired by Gwern.net, MIT Media Lab, and Harvard GSD, it reflects an ongoing, living process.
          </p>
        </section>

        <footer className="border-t pt-6 text-sm text-neutral-500">
          <a href="/" className="hover:underline">← Back home</a>
        </footer>
      </div>
    </main>
  );
} 