import Link from "next/link";

export default function TeslaWireless() {
  return (
    <main className="min-h-screen bg-white text-black font-serif p-6 md:p-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="border-b pb-6">
          <Link href="/projects" className="text-sm text-neutral-500 hover:text-black transition-colors">
            ← Back to outputs
          </Link>
          <h1 className="text-4xl md:text-6xl font-light leading-tight mt-4">
            Model Y Passive Entry
          </h1>
          <p className="mt-2 text-lg text-neutral-700">
            Engineering Program Management Intern, Tesla
          </p>
        </header>

        <section className="space-y-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              Led the development of Tesla&apos;s next-generation passive entry system, enabling seamless vehicle access through advanced wireless communication protocols. 
              Managed DFM, prototype builds, and supplier coordination across three continents, and helped implement 
              a significant cost-reduction.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-light tracking-tight text-black border-b pb-2">
              Key Responsibilities
            </h2>
            <ul className="space-y-2 font-mono text-sm leading-relaxed">
              <li>• Led cross-functional team of 15 engineers across hardware, software, and manufacturing</li>
              <li>• Managed Design for Manufacturing (DFM) process and prototype builds</li>
              <li>• Coordinated with suppliers across three continents</li>
              <li>• Implemented significant cost-reduction initiatives</li>
              <li>• Oversaw certification and compliance processes</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-light tracking-tight text-black border-b pb-2">
              Technologies & Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-neutral-100 text-neutral-700 font-mono text-sm px-2 py-1 rounded">
                Program Management
              </span>
              <span className="bg-neutral-100 text-neutral-700 font-mono text-sm px-2 py-1 rounded">
                DFM
              </span>
              <span className="bg-neutral-100 text-neutral-700 font-mono text-sm px-2 py-1 rounded">
                Hardware Integration
              </span>
              <span className="bg-neutral-100 text-neutral-700 font-mono text-sm px-2 py-1 rounded">
                Supplier Management
              </span>
              <span className="bg-neutral-100 text-neutral-700 font-mono text-sm px-2 py-1 rounded">
                Cross-functional Leadership
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-light tracking-tight text-black border-b pb-2">
              Impact
            </h2>
            <p className="font-mono text-sm leading-relaxed">
              Successfully delivered a new wireless hardware system that met Tesla's high standards for 
              performance and reliability. The project demonstrated the ability to manage complex, 
              multi-disciplinary engineering programs at scale.
            </p>
          </div>
        </section>

        <footer className="border-t pt-6 text-sm text-neutral-500">
          <Link href="/projects" className="hover:underline">
            ← Back to outputs
          </Link>
        </footer>
      </div>
    </main>
  );
} 