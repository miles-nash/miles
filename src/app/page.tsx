import Link from 'next/link'
import FractalTree from '@/components/FractalTree';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-serif p-6 md:p-16">
      <div className="max-w-3xl mx-auto space-y-12">
        <header className="border-b pb-6">
          <h1 className="text-4xl md:text-6xl font-light leading-tight">
            Miles Nash
          </h1>
          <p className="mt-2 text-lg text-neutral-700">
            Technical Program Manager. Systems Thinker. Builder.
          </p>
        </header>

        {/* Fractal Tree */}
        <div className="py-8 flex justify-center">
          <FractalTree />
        </div>

        {/* Quote */}
        <div className="py-6 text-center">
          <blockquote className="text-lg italic text-neutral-700 leading-relaxed">
            "The best way to predict the future is to invent it."
          </blockquote>
          <cite className="block mt-2 text-sm text-neutral-500">— Alan Kay</cite>
        </div>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">/now</h2>
          <p className="w-3/4 font-mono text-base leading-relaxed">
            Currently in Seattle, building cloud infrastructure at Microsoft. Reading "Stranger in a Strange Land". Thinking about AI-native workflows, techno-minimalism, and the future of interfaces.
          </p>
        </section>

        <section className="space-y-4">
          <Link href="/about" className="block no-underline text-black">
            <h2 className="text-3xl font-semibold tracking-tight">/about</h2>
          </Link>
        </section>

        <section className="space-y-4">
          <Link href="/timeline" className="block no-underline text-black">
            <h2 className="text-3xl font-semibold tracking-tight">/timeline</h2>
          </Link>
        </section>

        <section className="space-y-4">
          <Link href="/projects" className="block no-underline text-black">
            <h2 className="text-3xl font-semibold tracking-tight">/projects</h2>
          </Link>
        </section>

        <section className="space-y-4">
          <Link href="/philosophy" className="block no-underline text-black">
            <h2 className="text-3xl font-semibold tracking-tight">/philosophy</h2>
          </Link>
        </section>

        <footer className="border-t pt-6 text-sm text-neutral-500">
          <p>Minimalist site inspired by Harvard GSD, Gwern.net, and MIT Media Lab.</p>
        </footer>
      </div>
    </main>
  )
}

