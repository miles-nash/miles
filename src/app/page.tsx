import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-serif p-6 md:p-16">
      <div className="max-w-3xl mx-auto space-y-12">
        <header className="border-b pb-6">
          <h1 className="text-4xl md:text-6xl font-light leading-tight">
            Miles Nash
          </h1>
          <p className="mt-2 text-lg text-neutral-700">
            Designer and researcher exploring the intersection of technology, 
            human experience, and the built environment.
          </p>
        </header>

        {/* Simple ASCII Character */}
        <div className="py-8 text-center">
          <pre className="text-sm text-neutral-600 font-mono leading-tight">
{`    /\\
   /  \\
  /____\\
 /      \\
/        \\
|  🔥   |
|        |
 \\______/
    ||
    ||
   /  \\
  /____\\`}
          </pre>
        </div>

        {/* Quote */}
        <div className="py-6 border-l-4 border-neutral-200 pl-6">
          <blockquote className="text-lg italic text-neutral-700 leading-relaxed">
            "The best way to predict the future is to invent it."
          </blockquote>
          <cite className="block mt-2 text-sm text-neutral-500">— Alan Kay</cite>
        </div>

        <section className="space-y-4">
          <Link href="/timeline" className="block no-underline">
            <h2 className="text-2xl font-medium tracking-tight text-black focus:font-semibold focus:outline-none">/now</h2>
          </Link>
        </section>

        <section className="space-y-4">
          <Link href="/timeline" className="block no-underline">
            <h2 className="text-2xl font-medium tracking-tight text-black focus:font-semibold focus:outline-none">/timeline</h2>
          </Link>
        </section>

        <section className="space-y-4">
          <Link href="/about" className="block no-underline">
            <h2 className="text-2xl font-medium tracking-tight text-black focus:font-semibold focus:outline-none">/about</h2>
          </Link>
        </section>

        <section className="space-y-4">
          <Link href="/projects" className="block no-underline">
            <h2 className="text-2xl font-medium tracking-tight text-black focus:font-semibold focus:outline-none">/projects</h2>
          </Link>
        </section>

        <section className="space-y-4">
          <Link href="/philosophy" className="block no-underline">
            <h2 className="text-2xl font-medium tracking-tight text-black focus:font-semibold focus:outline-none">/philosophy</h2>
          </Link>
        </section>

        <footer className="border-t pt-6 text-sm text-neutral-500">
          <p>Minimalist site inspired by Harvard GSD, Gwern.net, and MIT Media Lab.</p>
        </footer>
      </div>
    </main>
  )
}

