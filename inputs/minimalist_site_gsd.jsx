// pages/index.tsx
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-serif p-6 md:p-16">
      <div className="max-w-3xl mx-auto space-y-12">
        <header className="border-b pb-6">
          <h1 className="text-4xl md:text-6xl font-light leading-tight">
            Miles Nash
          </h1>
          <p className="mt-2 text-lg text-neutral-700">
            Technical Program Manager. Systems Thinker. Engineer of Beautiful Things.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-medium tracking-tight">/now</h2>
          <p className="text-base leading-relaxed">
            Currently in Seattle, building cloud infrastructure at Microsoft. Reading "Stranger in a Strange Land". Thinking about AI-native workflows, techno-minimalism, and the future of interfaces.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-medium tracking-tight">/essays</h2>
          <ul className="list-disc pl-6 text-base text-neutral-800">
            <li>"The Interface is the Ideology" — a look at how UI reflects power structures.</li>
            <li>"Build Tools, Not Empires" — reflections on scalable creativity in the age of AI.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-medium tracking-tight">/projects</h2>
          <ul className="list-disc pl-6 text-base text-neutral-800">
            <li><strong>People's Prompt</strong>: an AI zine capturing public sentiment through interactive visual storytelling.</li>
            <li><strong>Hands-Free Copilot</strong>: a silent speech recognition prototype for voice-free interaction.</li>
          </ul>
        </section>

        <footer className="border-t pt-6 text-sm text-neutral-500">
          <p>Minimalist site inspired by Harvard GSD, Gwern.net, and MIT Media Lab.</p>
        </footer>
      </div>
    </main>
  );
}
