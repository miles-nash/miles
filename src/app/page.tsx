'use client'

import Link from 'next/link'
import FractalTree from '@/components/FractalTree';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans p-6 md:p-16">
      <div className="max-w-2xl mx-auto">
        <header className="pb-16">
          <h1 className="text-4xl md:text-5xl font-light leading-tight">
            Miles Nash
          </h1>
          <p className="mt-2 text-lg text-neutral-600">
            Technical Program Manager. Systems Thinker. Builder.
          </p>
        </header>

        <div className="space-y-8 pb-24">
          <section>
            <Link href="/about" className="block no-underline text-black hover:no-underline">
              <h2 className="text-2xl font-light tracking-tight text-black hover:text-neutral-600 transition-colors">/me</h2>
            </Link>
          </section>

          <section>
            <Link href="/favorites" className="block no-underline text-black hover:no-underline">
              <h2 className="text-2xl font-light tracking-tight text-black hover:text-neutral-600 transition-colors">/inputs</h2>
            </Link>
          </section>

          <section>
            <Link href="/projects" className="block no-underline text-black hover:no-underline">
              <h2 className="text-2xl font-light tracking-tight text-black hover:text-neutral-600 transition-colors">/outputs</h2>
            </Link>
          </section>

          <section>
            <Link href="/philosophy" className="block no-underline text-black hover:no-underline">
              <h2 className="text-2xl font-light tracking-tight text-black hover:text-neutral-600 transition-colors">/principles</h2>
            </Link>
          </section>
        </div>

        <div className="pb-24 space-y-12 flex flex-col items-center">
          <div className="w-64">
            <FractalTree />
          </div>
          <div>
            <blockquote className="text-base italic text-neutral-600 leading-relaxed text-center">
              "The best way to predict the future is to invent it."
            </blockquote>
            <cite className="block mt-2 text-sm text-neutral-500 text-center">— Alan Kay</cite>
          </div>
        </div>
      </div>
    </main>
  )
}

