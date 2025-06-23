import Link from "next/link";

export default function RiscVCpu() {
  return (
    <main className="min-h-screen bg-white text-black font-serif p-6 md:p-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="border-b pb-6">
          <Link href="/projects" className="text-sm text-neutral-500 hover:text-black transition-colors">
            ← Back to outputs
          </Link>
          <h1 className="text-4xl md:text-6xl font-light leading-tight mt-4">
            3-Stage RISC-V CPU
          </h1>
          <p className="mt-2 text-lg text-neutral-700">
            Personal Project
          </p>
        </header>

        <section className="space-y-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              Designed and implemented a 3-stage pipelined RISC-V CPU with a 4KB cache in Verilog. 
              Handled the complete VLSI flow from simulation and synthesis to place-and-route using 
              industry-standard Cadence and Synopsys tools.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-light tracking-tight text-black border-b pb-2">
              Technical Details
            </h2>
            <ul className="space-y-2 font-mono text-sm leading-relaxed">
              <li>3-stage pipeline: Fetch, Decode, Execute</li>
              <li>RISC-V RV32I base integer instruction set</li>
              <li>4KB direct-mapped instruction cache</li>
              <li>Hazard detection and forwarding logic</li>
              <li>Complete VLSI design flow implementation</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-light tracking-tight text-black border-b pb-2">
              Design Flow
            </h2>
            <ul className="space-y-2 font-mono text-sm leading-relaxed">
              <li>RTL design and functional verification in Verilog</li>
              <li>Synthesis using Synopsys Design Compiler</li>
              <li>Place-and-route with Cadence Innovus</li>
              <li>Timing analysis and optimization</li>
              <li>Power analysis and area optimization</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-light tracking-tight text-black border-b pb-2">
              Technologies & Skills
            </h2>
            <p className="font-mono text-sm leading-relaxed">
              Verilog, RISC-V, VLSI, ASIC Design, Computer Architecture, Cadence, Synopsys
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-light tracking-tight text-black border-b pb-2">
              Learning Outcomes
            </h2>
            <p className="font-mono text-sm leading-relaxed">
              This project provided deep understanding of computer architecture, digital design, and 
              the complete ASIC design flow. Successfully implemented a functional CPU that could 
              execute RISC-V programs, demonstrating mastery of both theoretical concepts and 
              practical implementation skills.
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