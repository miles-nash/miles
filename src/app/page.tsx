'use client'

import Link from 'next/link'
import FractalTree from '@/components/FractalTree';
import { useState } from 'react';

export default function Home() {
  const [showNowDetails, setShowNowDetails] = useState(false);

  return (
    <main className="min-h-screen bg-white text-black font-sans p-6 md:p-16">
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
          <div 
            onClick={() => setShowNowDetails(!showNowDetails)}
            className="cursor-pointer group"
          >
            <h2 className="text-3xl font-light tracking-tight text-black group-hover:text-neutral-600 transition-colors">
              /now
            </h2>
          </div>
          {showNowDetails && (
            <div className="mt-4 transition-all duration-300 ease-in-out">
              <p className="w-3/4 font-mono text-base leading-relaxed">
                Currently in Seattle, building cloud infrastructure at Microsoft. Reading "Stranger in a Strange Land". Thinking about AI-native workflows, techno-minimalism, and the future of interfaces.
              </p>
            </div>
          )}
        </section>

        <section className="space-y-4">
          <Link href="/about" className="block no-underline text-black hover:no-underline">
            <h2 className="text-3xl font-light tracking-tight text-black hover:text-black">/my story</h2>
          </Link>
        </section>

        <section className="space-y-4">
          <Link href="/favorites" className="block no-underline text-black hover:no-underline">
            <h2 className="text-3xl font-light tracking-tight text-black hover:text-black">/inputs</h2>
          </Link>
        </section>

        <section className="space-y-4">
          <Link href="/projects" className="block no-underline text-black hover:no-underline">
            <h2 className="text-3xl font-light tracking-tight text-black hover:text-black">/outputs</h2>
          </Link>
        </section>

        <section className="space-y-4">
          <Link href="/philosophy" className="block no-underline text-black hover:no-underline">
            <h2 className="text-3xl font-light tracking-tight text-black hover:text-black">/principles</h2>
          </Link>
        </section>

        <footer className="border-t pt-6 text-sm text-neutral-500">
          <p>Minimalist site inspired by Harvard GSD, Gwern.net, and MIT Media Lab.</p>
        </footer>
      </div>
    </main>
  )
}

