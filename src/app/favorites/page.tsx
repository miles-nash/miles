import Link from 'next/link'

export default function Favorites() {
  const books = [
    "Thinking in Systems — Donella H. Meadows",
    "1Q84 — Haruki Murakami",
    "Steve Jobs — Walter Isaacson",
    "Chip War — Chris Miller",
    "Flowers for Algernon — Daniel Keyes",
    "Factfulness — Hans Rosling",
    "What the Dormouse Said — John Markoff",
    "Quiet — Susan Cain",
    "The End of the Golden Gate — ed. Gary Kamiya",
    "Becoming a Changemaker — Alex Budak",
    "Why We Work — Barry Schwartz",
    "Crying in H Mart — Michelle Zauner",
    "The Alchemist — Paulo Coelho",
    "On Wings of a Lion — Susan Wakeford Angard",
    "Project Hail Mary — Andy Weir",
    "Liftoff — Eric Berger",
    "Range — David Epstein",
    "The Hitchhiker's Guide to the Galaxy — Douglas Adams",
    "Algorithms to Live By — Brian Christian & Tom Griffiths",
    "The Prince of Milk — Exurb1a",
    "Just Mercy — Bryan Stevenson",
    "Talking to Strangers — Malcolm Gladwell",
    "Green Eggs and Ham — Dr. Seuss",
    "On the Road — Jack Kerouac",
    "Artemis — Andy Weir",
    "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future — Ashlee Vance",
    "1984 — George Orwell",
    "The Great Gatsby — F. Scott Fitzgerald"
  ]

  const movies = [
    // Add your favorite movies here
    "Coming soon..."
  ]

  const essays = [
    "Paul Graham Essays — Various",
    "Whole Earth Catalog — Counterculture Resource Guide",
    "Coming soon..."
  ]

  const creators = [
    "Steve Jobs — Apple Co-founder & Visionary",
    "Andrej Karpathy — AI Researcher & Educator",
    "Tyler the Creator — Musician & Creative",
    "Exurb1a — YouTube Philosopher & Writer"
  ]

  const videos = [
    "Exurb1a YouTube Channel — Philosophy & Science",
    "How It's Made — Manufacturing Documentary Series",
    "Coming soon..."
  ]

  return (
    <main className="min-h-screen bg-white text-black font-sans p-6 md:p-16">
      <div className="max-w-3xl mx-auto space-y-12">
        <header className="border-b pb-6">
          <Link href="/" className="text-sm text-neutral-500 hover:text-black transition-colors">
            ← Back home
          </Link>
          <h1 className="text-4xl md:text-6xl font-light leading-tight mt-4">
            Inputs
          </h1>
          <p className="mt-2 text-lg text-neutral-700">
            Books, creators, and media that have shaped my thinking.
          </p>
        </header>

        {/* Books Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-light tracking-tight text-black border-b pb-2">
            Books
          </h2>
          <div className="grid gap-3">
            {books.map((book, index) => (
              <div key={index} className="font-mono text-sm leading-relaxed">
                {book}
              </div>
            ))}
          </div>
        </section>

        {/* Creators Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-light tracking-tight text-black border-b pb-2">
            Creators
          </h2>
          <div className="grid gap-3">
            {creators.map((creator, index) => (
              <div key={index} className="font-mono text-sm leading-relaxed">
                {creator}
              </div>
            ))}
          </div>
        </section>

        {/* Essays Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-light tracking-tight text-black border-b pb-2">
            Essays
          </h2>
          <div className="grid gap-3">
            {essays.map((essay, index) => (
              <div key={index} className="font-mono text-sm leading-relaxed">
                {essay}
              </div>
            ))}
          </div>
        </section>

        {/* Videos Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-light tracking-tight text-black border-b pb-2">
            Videos
          </h2>
          <div className="grid gap-3">
            {videos.map((video, index) => (
              <div key={index} className="font-mono text-sm leading-relaxed">
                {video}
              </div>
            ))}
          </div>
        </section>

        {/* Movies Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-light tracking-tight text-black border-b pb-2">
            Movies
          </h2>
          <div className="grid gap-3">
            {movies.map((movie, index) => (
              <div key={index} className="font-mono text-sm leading-relaxed text-neutral-500">
                {movie}
              </div>
            ))}
          </div>
        </section>

        <footer className="border-t pt-6 text-sm text-neutral-500">
          <p>Curated collection of media and creators that have influenced my perspective.</p>
        </footer>
      </div>
    </main>
  )
} 